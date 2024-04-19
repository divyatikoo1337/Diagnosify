import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

liver_dataset = pd.read_csv(r'dataset\liver.csv')


# Drop rows with missing values
liver_dataset = liver_dataset.dropna()

# Reset index after dropping rows
liver_dataset.reset_index(drop=True, inplace=True)

X = liver_dataset.drop(columns='Status',axis=1)
Y = liver_dataset['Status']

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

classifiers = {
    'KNN': KNeighborsClassifier(n_neighbors=2),
    'Decision Tree': DecisionTreeClassifier(random_state=42, max_depth=5),
    'Random Forest': RandomForestClassifier(random_state=42),
    'SVM': SVC(kernel='linear'),
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
input_data = (65, 0, 0.7, 0.1, 187, 16, 18, 6.8, 3.3, 0.9)
input_data_as_numpy_array = np.asarray(input_data).reshape(1, -1)
prediction = best_classifier.predict(input_data_as_numpy_array)

if prediction[0] == 1:
    print('The person does not have a liver disease')
else:
    print('The person has a liver disease')

import pickle
filename = 'liver_model.sav'
pickle.dump(best_classifier, open(filename, 'wb'))

loaded_model = pickle.load(open('liver_model.sav', 'rb'))

input_data = (65,0,0.7,0.1,187,16,18,6.8,3.3,0.9)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = best_classifier.predict(input_data_reshaped)
print(prediction)

if (prediction[0] == 1):
  print('The person does not have a liver disease')
else:
  print('The person has a liver disease')