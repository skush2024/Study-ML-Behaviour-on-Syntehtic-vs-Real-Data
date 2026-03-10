from fastapi import FastAPI
from .preprocess import processor # Import our helper
import joblib

app = FastAPI()
model = joblib.load("../../models/stress_model.pkl")

@app.post("/predict")
async def predict_stress(user_input: dict):
    # Step 1: Preprocess using your specific logic
    processed_features = processor.transform(user_input)
    
    # Step 2: Predict
    prediction = model.predict(processed_features)
    
    # Step 3: Map to Apple Health style status
    status_map = {0: "Low", 1: "High"}
    result = status_map.get(prediction[0], "Unknown")
    
    return {"stress_level": result}