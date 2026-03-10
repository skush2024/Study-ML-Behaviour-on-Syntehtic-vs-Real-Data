import joblib

class Predict:
    def __init__(self, model_path):
        self.model = joblib.load(model_path)
    
    def makePrediction(self, scaled_data):
        prediction_probabilities = self.model.predict_proba(scaled_data)
        prediction = self.model.predict(scaled_data)
        return prediction, prediction_probabilities
    



predictor = Predict("/Users/skush/CodeX/Stress-Level-Classifier/models/svm_84.pkl")