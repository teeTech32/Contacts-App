from fastapi import FastAPI, HTTPException, Depends, UploadFile, File
from pydantic import BaseModel
from typing import List, Annotated
from backend import models
from backend.database import engine, SessionLocal, URL_DATABASE
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from random import randint
import os
from pathlib import Path

IMAGEDIR = Path()/"backend/images"
app = FastAPI()

origins = [
  "http://localhost:3000"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = origins,
  allow_credentials=True,
  allow_methods=['*'],
  allow_headers=['*']
)

class StateBase(BaseModel): 
  state_name: str 

class CountryBase(BaseModel):
  country_name: str 

class ContactsBase(BaseModel):
  first_name: str
  last_name: str
  email: str
  mobile_no: str
  state_name: str
  country_name: str
  
class TransactionModel(ContactsBase):
  id: int

  class Config:
    from_attributes= True 
       
def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()
    
db_dependency = Annotated[Session, Depends(get_db)] 

models.Base.metadata.create_all(bind=engine)

@app.post("/contacts/", response_model=TransactionModel)
async def create_contact(contacts:ContactsBase,db:db_dependency,): 
  db_country = models.Country(country_name=contacts.country_name)
  db.add(db_country)
  db.commit()
  db.refresh(db_country)
  db_state = models.State(state_name=contacts.state_name, country_id=db_country.id) 
  db.add(db_state)
  db.commit()
  db.refresh(db_country)
  db.refresh(db_state)
  db_contact = models.Contact(first_name=contacts.first_name, last_name=contacts.last_name,email=contacts.email, mobile_no=contacts.mobile_no, state_id=db_state.id, state_name=db_state.state_name, country_id=db_country.id, country_name=db_country.country_name,)
  db.add(db_contact)
  db.commit()
  return db_contact 
         
@app.get('/countries/')
async def countries_read(db:db_dependency):
  result = db.query(models.Country).order_by(models.Country.id).all()
  if not result:
    raise HTTPException(status_code=404, detail='No country is available yet!')
  return result
       
@app.get('/states/{country_id}')
async def countries_read(country_id:int, db:db_dependency):
  result = db.query(models.State).filter(models.State.country_id==country_id).all()
  if not result:
    raise HTTPException(status_code=404, detail= f"No State for the following country_id:{country_id}")
  return result

@app.get('/contacts/')
async def contacts_read(db:db_dependency):
  result = db.query(models.Contact).order_by(models.Contact.id).all()
  if not result:
    raise HTTPException(status_code=404, detail= "No contact is available yet!")
  return result

@app.get('/contact/{id}', response_model=TransactionModel)
async def contacts_read(id:int, db:db_dependency):
  result = db.query(models.Contact).filter(models.Contact.id==id).one()
  if not result:
    raise HTTPException(status_code=404, detail= f"No contact with the following ID:{id} is available!")
  return result

@app.patch('/contact/{id}', response_model=TransactionModel)
async def edit_contact(id:int, data:ContactsBase, db:db_dependency):
  result = db.query(models.Contact).filter(models.Contact.id==id).one()
  if result is not None:
    result.first_name = data.first_name
    result.last_name = data.last_name
    result.email = data.email
    result.mobile_no = data.mobile_no 
    result.state_name = data.state_name 
    result.country_name = data.country_name
    result.photo_url = data.photo_url
    db.commit()
    return result
  raise HTTPException(status_code=404, detail= f"No contact with the following ID:{id} is available!")

@app.delete('/contact/{id}')
async def delete_contact(id:int, db:db_dependency):
  result=db.query(models.Contact).filter(models.Contact.id==id).one()
  db.delete(result)
  db.commit()
  return result
  raise HTTPException(status_code=404, detail= f"The contact ID:{id} has been deleted! ")

@app.get('/show/')
async def get_upload():
  files = os.listdir(IMAGEDIR)
  random_index = randint(0, len(files) - 1)
  path = f"{IMAGEDIR}{files[random_index]}"

  return FileResponse(path)

#@app.post('/UploadImage/')
#async def upload_image( file:UploadFile = File(...)):
 # contents = await file.read()
 # save_to = IMAGEDIR/file.filename
  # save the file
  #with open(save_to,  "wb") as f:
   # f.write(contents) 
 # return {"filename": file.filename}
