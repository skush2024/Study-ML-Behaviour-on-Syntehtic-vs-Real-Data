import joblib
import pandas as pd
import numpy as np

class StressPreprocessor:
    def __init__(self, scaler_path, features_path):
        # Load the assets from your 'models' folder
        self.scaler = joblib.load(scaler_path)
        self.training_columns = joblib.load(features_path)

    def transform(self, input_dict):
        # 1. Convert dict to DataFrame
        data = pd.DataFrame([input_dict])
        
        # 2. Align Features (Add missing, remove extra)
        for col in self.training_columns:
            if col not in data.columns:
                data[col] = 0
        
        data = data[self.training_columns]
        
        # 3. Handle Nulls & Scale
        data = data.fillna(0)
        scaled_data = self.scaler.transform(data)
        
        return scaled_data

# Initialize once to be used by the API
processor = StressPreprocessor(
    scaler_path="../../models/scaler.pkl",
    features_path="../../models/features.pkl"
)