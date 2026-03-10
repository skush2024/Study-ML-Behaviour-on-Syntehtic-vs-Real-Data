from pydantic import BaseModel

class ConsultationData(BaseModel):
    # Profile
    Name: str
    Age: int
    Gender: str
    Occupation: str
    
    # Digital Pulse
    Daily_Screen_Hours: float
    Social_Media_Hours: float
    App_Usage_Count: int
    
    # Work Load
    Work_Productivity_Score: int  # 1-10 scale
    Daily_Work_Hours: float
    Commute_Hours_Per_Day: float
    
    # Lifestyle Recovery
    Sleep_Hours: float
    Caffeine_Cups_Per_Day: int
    Exercise_Hours_Per_Week: float

class StressInsight(BaseModel):
    category: str
    label: str
    message: str
    predict_proba : float