import enum

from sqlalchemy import Boolean, Column, Integer, String, Enum, Text, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import null

from ..db_setup import Base

class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer,primary_key=True, index=True, autoincrement=True)
    time = Column(DateTime, unique=True, nullable=False)
    status = Column(Text, nullable=False)