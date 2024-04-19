import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

heart_dataset = pd.read_csv(r'C:\Users\abhis\Desktop\mp-react\backend\dataset\heart.csv')


# Drop rows with missing values
heart_dataset = heart_dataset.dropna()

# Reset index after dropping rows
heart_dataset.reset_index(drop=True, inplace=True)

X = heart_dataset.drop(columns='target', axis=1)
Y = heart_dataset['target']

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

classifiers = {
    'Decision Tree': DecisionTreeClassifier(random_state=42, max_depth=5),
    'SVM': SVC(kernel='poly'),
    'Logistic Regression': LogisticRegression(max_iter=1000)}

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

# Use the best classifier for prediction
input_data = (62,0,0,140,268,0,0,160,0,3.6,0,2,2)
input_data_as_numpy_array = np.asarray(input_data).reshape(1, -1)
prediction = best_classifier.predict(input_data_as_numpy_array)
if (prediction[0]== 0):
  print('The Person does not have a Heart Disease')
else:
  print('The Person has Heart Disease')
import pickle
filename = 'heart_disease_model.sav'
pickle.dump(best_classifier, open(filename, 'wb'))

loaded_model = pickle.load(open('heart_disease_model.sav', 'rb'))

input_data = (62,0,0,140,268,0,0,160,0,3.6,0,2,2)
input_data_as_numpy_array = np.asarray(input_data).reshape(1, -1)
prediction = best_classifier.predict(input_data_as_numpy_array)
if (prediction[0]== 0):
  print('The Person does not have a Heart Disease')
else:
  print('The Person has Heart Disease')