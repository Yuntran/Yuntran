import fastapi
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from typing import Union,Optional
from datetime import datetime
from uuid import UUID

from db.db_setup import get_db
from db.models.attendance import Attendance

from pydantic import BaseModel
from enum import Enum

router =fastapi.APIRouter()

class Status (Enum):
     type: str
     begin = "出勤"                                      
     finish = "退勤"                                                   

class AttendanceRequest(BaseModel):
    status: Status

@router.post("/attendances")  
async def attendance_register(attendanceRequest:AttendanceRequest,db: Session = Depends(get_db)) : 
    d = datetime.utcnow()
    newAttendance = Attendance (time=d, status= attendanceRequest.status.value)
    db.add(newAttendance)
    db.commit()
    db.refresh(newAttendance)
    return newAttendance

@router.get("/getattendancelist")     
async def attendance_list(db: Session = Depends(get_db)):
    attendanceList = db.query(Attendance).order_by(Attendance.time.desc()).limit(6).all()
    return  attendanceList
