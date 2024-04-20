import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

diabetes_dataset = pd.read_csv(r'backend\dataset\diabetes.csv')


# Drop rows with missing values
diabetes_dataset = diabetes_dataset.dropna()

# Reset index after dropping rows
diabetes_dataset.reset_index(drop=True, inplace=True)

X = diabetes_dataset.drop(columns = 'Outcome', axis=1)
Y = diabetes_dataset['Outcome']

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
input_data = (5,166,72,19,175,25.8,0.587,51)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = best_classifier.predict(input_data_reshaped)
print(prediction)

if (prediction[0] == 0):
  print('The person is not diabetic')
else:
  print('The person is diabetic')
import pickle
filename = 'diabetes_model.sav'
pickle.dump(best_classifier, open(filename, 'wb'))

loaded_model = pickle.load(open('diabetes_model.sav', 'rb'))

input_data = (5,166,72,19,175,25.8,0.587,51)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = best_classifier.predict(input_data_reshaped)
print(prediction)

if (prediction[0] == 0):
  print('The person is not diabetic')
else:
  print('The person is diabetic')