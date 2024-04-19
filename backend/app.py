from flask import Flask, jsonify, request
import joblib
from flask_cors import CORS

app = Flask(__name__)

# Load the ML model
heart_model = joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/heart_disease_model.sav')
diabetes_model = joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/diabetes_model.sav')
parkinsons_model  =  joblib.load('/Users/DT/mp-react/backend/ML_Models/parkinsons_model.sav')

@app.route('/heart', methods=['POST'])
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
    prediction = heart_model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})

@app.route('/diabetes', methods=['POST'])
def diabetes():
    data = request.json
    pregnancies = int(data['pregnancies'])
    glucose = int(data['glucose'])
    bloodPressure = int(data['bloodPressure'])
    skinThickness = int(data['skinThickness'])
    insulin = int(data['insulin'])
    bmi = float(data['bmi'])
    diabetesPedigreeFunction = float(data['diabetesPedigreeFunction'])
    age = int(data['age'])
    outcome = int(data['outcome'])

    # Create a feature list
    features = [pregnancies , glucose , bloodPressure , skinThickness, insulin, bmi, diabetesPedigreeFunction, age, outcome]
    
    # Make prediction
    prediction = diabetes_model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})

@app.route('/parkisons', methods=['POST'])
def parkinsons():
    data = request.json
    
    mdvpFo = float(data['mdvpFo'])
    mdvpFhi = float(data['mdvpFhi'])
    mdvpFlo = float(data['mdvpFlo'])
    mdvpJitter = float(data['mdvpJitter'])
    mdvpJitterAbs = float(data['mdvpJitterAbs'])
    mdvpRAP = float(data['mdvpRAP'])
    mdvpPPQ = float(data['mdvpPPQ'])
    jitterDDP = float(data['jitterDDP'])
    mdvpShimmer = float(data['mdvpShimmer'])
    mdvpShimmerdB = float(data['mdvpShimmerdB'])
    shimmerAPQ3 = float(data['shimmerAPQ3'])
    shimmerAPQ5 = float(data['shimmerAPQ5'])
    mdvpAPQ = float(data['mdvpAPQ'])
    shimmerDDA = float(data['shimmerDDA'])
    nhr = float(data['nhr'])
    hnr = float(data['hnr'])
    rpde = float(data['rpde'])
    dfa = float(data['dfa'])
    spread1 = float(data['spread1'])
    spread2 = float(data['spread2'])
    d2 = float(data['d2'])
    ppeStatus = float(data['ppeStatus'])
    Status = float(data['Status'])
    
    features = [
        [mdvpFo, mdvpFhi, mdvpFlo, mdvpJitter, mdvpJitterAbs, mdvpRAP, mdvpPPQ, 
         jitterDDP, mdvpShimmer, mdvpShimmerdB, shimmerAPQ3, shimmerAPQ5, 
         mdvpAPQ, shimmerDDA, nhr, hnr, rpde, dfa, spread1, spread2, d2, ppeStatus, Status]
    ]
    
    prediction = parkinsons_model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})


CORS(app)
if __name__ == '__main__':
    app.run(debug=True,port=5000)

