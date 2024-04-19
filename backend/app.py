from flask import Flask, jsonify, request
import joblib
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

# Load the ML model
model = joblib.load('/Users/DT/diagnosify/mp-react/backend/ML_Models/heart_disease_model.sav')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Extract form data from the request
    age = int(data['age'])
    sex = int(data['sex'])
    cp = int(data['cp'])
    trestbps = int(data['trestbps'])
    chol = int(data['chol'])
    fbs = int(data['fbs'])
    restecg = int(data['restecg'])
    thalach = int(data['thalach'])
    exang = int(data['exang'])
    oldpeak = float(data['oldpeak'])
    slope = int(data['slope'])
    ca = int(data['ca'])
    thal = int(data['thal'])
    
    # Create a feature list
    features = [[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]]
    
    # Make prediction
    prediction = model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)

