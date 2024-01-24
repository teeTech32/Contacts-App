from sqlalchemy import  String, Integer, ForeignKey, Column, ForeignKeyConstraint
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Country(Base):
  __tablename__ ='countries'
  id = Column(Integer, primary_key=True, index=True, autoincrement=True)
  country_name = Column(String(100), index=True)

class State(Base):
  __tablename__ = 'states'
  id = Column(Integer, primary_key=True, index=True, autoincrement=True)
  state_name = Column(String(100), index=True)
  country_id = Column(Integer, ForeignKey('countries.id'))
    
class Contact(Base):
  __tablename__ = 'contacts' 
  id = Column(Integer, primary_key=True, index=True, autoincrement=True)
  first_name = Column(String(100), index=True)
  last_name = Column(String(100), index=True)
  email = Column(String(100), index=True, unique=True)
  mobile_no = Column(String(100), index=True, unique=True)
  state_id = Column(Integer, nullable=False)
  state_name = Column(String(100), nullable=False)
  country_id = Column(Integer, nullable=False)
  country_name = Column(String(100), nullable=False)
  ForeignKeyConstraint(["state_id", "state_name", "country_id", "country_name", ], ["states.id", "states.state_name", "countries.id", "countries.country_name",])
  