import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

diabetes_dataset = pd.read_csv(r'backend\dataset\breast_cancer.csv')

X = diabetes_dataset.drop(columns = ['diagnosis','id'], axis=1) # 0 - malignant , 1 - benign
Y = diabetes_dataset['diagnosis']


X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

classifiers = {
    'Decision Tree': DecisionTreeClassifier(random_state=42, max_depth=4),
    'SVM': SVC(kernel='linear'),
    'Logistic Regression': LogisticRegression()}

accuracies = {}

# Train and evaluate all classifiers
for name, clf in classifiers.items():
    clf.fit(X_train, Y_train)
    test_accuracy = accuracy_score(clf.predict(X_test), Y_test)
    accuracies[name] = test_accuracy
    print(f'{name} - Test Accuracy: {test_accuracy}')

# Select the best classifier based on test accuracy
best_classifier_name = max(accuracies, key=accuracies.get)
best_classifier = classifiers[best_classifier_name]
best_accuracy = accuracies[best_classifier_name]
print(f'Best Classifier: {best_classifier_name}, Test Accuracy: {best_accuracy}')
input_data = (17.99,10.38,122.8,1001,0.1184,0.2776,0.3001,0.1471,0.2419,0.07871,1.095,0.9053,8.589,153.4,0.006399,0.04904,0.05373,0.01587,0.03003,0.006193,25.38,17.33,184.6,2019,0.1622,0.6656,0.7119,0.2654,0.4601,0.1189)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = best_classifier.predict(input_data_reshaped)
print(prediction)

if (prediction[0] == 0):
  print('The person has malignant breast cancer')
else:
  print('The person is benign brease cancer')

import pickle
filename = 'breastcancer_model.sav'
pickle.dump(best_classifier, open(filename, 'wb'))

loaded_model = pickle.load(open('breastcancer_model.sav', 'rb'))
input_data = (17.99,10.38,122.8,1001,0.1184,0.2776,0.3001,0.1471,0.2419,0.07871,1.095,0.9053,8.589,153.4,0.006399,0.04904,0.05373,0.01587,0.03003,0.006193,25.38,17.33,184.6,2019,0.1622,0.6656,0.7119,0.2654,0.4601,0.1189)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = best_classifier.predict(input_data_reshaped)

if (prediction[0] == 0):
  print('The person has malignant breast cancer')
else:
  print('The person is benign brease cancer')

                