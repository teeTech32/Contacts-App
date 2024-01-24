from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

URL_DATABASE = 'postgresql://postgres:teeTech@localhost:5400/ContactApplication'

engine = create_engine(URL_DATABASE, )

SessionLocal = sessionmaker(autoflush=False, autocommit=False,  bind=engine)


