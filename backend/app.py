from flask import Flask, jsonify, request
import joblib
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}}) 
# Load the ML model
heart_model = joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/heart_disease_model.sav')
diabetes_model = joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/diabetes_model.sav')
parkinsons_model  =  joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/parkinsons_model.sav')
liver_model = joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/liver_model.sav')
breast_cancer_model = joblib.load('C:/Users/abhis/Desktop/mp-react/frontend/src/saved_models/liver_model.sav')
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

    # Create a feature list
    features = [[pregnancies , glucose , bloodPressure , skinThickness, insulin, bmi, diabetesPedigreeFunction, age]]
    
    # Make prediction
    prediction = diabetes_model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})

@app.route('/parkinsons', methods=['POST'])
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
    
    features = [
        [mdvpFo, mdvpFhi, mdvpFlo, mdvpJitter, mdvpJitterAbs, mdvpRAP, mdvpPPQ, 
         jitterDDP, mdvpShimmer, mdvpShimmerdB, shimmerAPQ3, shimmerAPQ5, 
         mdvpAPQ, shimmerDDA, nhr, hnr, rpde, dfa, spread1, spread2, d2, ppeStatus]
    ]
    
    prediction = parkinsons_model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})
from flask import Flask, request, jsonify

@app.route('/liver', methods=['POST'])
def liver():
    data = request.json
    Age = int(data['Age'])
    gender = int(data['gender'])
    tb = float(data['tb'])
    db = float(data['db'])
    alkphos = float(data['alkphos'])
    sgpt = float(data['sgpt'])
    sgot = float(data['sgot'])
    tp = float(data['tp'])
    alb = float(data['alb'])
    agRatio = float(data['agRatio'])

    # Create a feature list
    features = [[Age, gender, tb, db, alkphos, sgpt, sgot, tp, alb, agRatio]]
    
    # Make prediction
    prediction = liver_model.predict(features)  
    
    return jsonify({'prediction': prediction.tolist()})

@app.route('/breast_cancer', methods=['POST'])
def breast_cancer():
    data = request.json
    radius_mean = float(data['radius_mean'])
    texture_mean = float(data['texture_mean'])
    perimeter_mean = float(data['perimeter_mean'])
    area_mean = float(data['area_mean'])
    smoothness_mean = float(data['smoothness_mean'])
    compactness_mean = float(data['compactness_mean'])
    concavity_mean = float(data['concavity_mean'])
    concave_points_mean = float(data['concave_points_mean'])
    symmetry_mean = float(data['symmetry_mean'])
    fractal_dimension_mean = float(data['fractal_dimension_mean'])
    radius_se = float(data['radius_se'])
    texture_se = float(data['texture_se'])
    perimeter_se = float(data['perimeter_se'])
    area_se = float(data['area_se'])
    smoothness_se = float(data['smoothness_se'])
    compactness_se = float(data['compactness_se'])
    concavity_se = float(data['concavity_se'])
    concave_points_se = float(data['concave_points_se'])
    symmetry_se = float(data['symmetry_se'])
    fractal_dimension_se = float(data['fractal_dimension_se'])
    radius_worst = float(data['radius_worst'])
    texture_worst = float(data['texture_worst'])
    perimeter_worst = float(data['perimeter_worst'])
    area_worst = float(data['area_worst'])
    smoothness_worst = float(data['smoothness_worst'])
    compactness_worst = float(data['compactness_worst'])
    concavity_worst = float(data['concavity_worst'])
    concave_points_worst = float(data['concave_points_worst'])
    symmetry_worst = float(data['symmetry_worst'])
    fractal_dimension_worst = float(data['fractal_dimension_worst'])
    
    # Create a feature list
    features = [[radius_mean, texture_mean, perimeter_mean, area_mean, 
        smoothness_mean, compactness_mean, concavity_mean, concave_points_mean, 
        symmetry_mean, fractal_dimension_mean, radius_se, texture_se, perimeter_se, 
        area_se, smoothness_se, compactness_se, concavity_se, concave_points_se, 
        symmetry_se, fractal_dimension_se, radius_worst, texture_worst, 
        perimeter_worst, area_worst, smoothness_worst, compactness_worst, 
        concavity_worst, concave_points_worst, symmetry_worst, fractal_dimension_worst
    ]]
    # Make prediction
    prediction = breast_cancer_model.predict(features)
    
    return jsonify({'prediction': prediction.tolist()})
if __name__ == '__main__':
    app.run(debug=True,port=5000)

