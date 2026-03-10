from pydantic import BaseModel
from typing import List

# Incoming Data from React
class AssessmentData(BaseModel):
    name: str
    age: int
    gender: str
    occupation: str
    screenTime: float
    socialMedia: float
    wpaiScore: int
    sleepHours: float
    coffeeCups: int

# Outgoing Data back to React
class InsightDetail(BaseModel):
    category: str
    status: str      # e.g., "Optimal", "Warning", "Critical"
    message: str

class AnalysisResult(BaseModel):
    stress_score: int       
    risk_level: str         
    insights: List[InsightDetail]