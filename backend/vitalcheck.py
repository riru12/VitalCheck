import pandas as pd
import numpy as np
import joblib 

data = pd.read_csv('heart.csv')
data.head()


data = data.dropna()

X = data.iloc[:,[0,1,2,3,4,5,6,7,8,9,10,11,12]].values                                                # independent variables
y = data.iloc[:,13].values                                                                          # dependent variables

# SPLITTING THE DATA
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=202006914)  

from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)
joblib.dump(sc, 'scaler.pkl')

from sklearn.svm import SVC

svc_model = SVC()
svc_model.fit(X_train,y_train)

predictions = svc_model.predict(X_test)
# from sklearn.metrics import accuracy_score
# accuracy_score(y_test, predictions)

# from sklearn.metrics import classification_report,confusion_matrix
# import seaborn as sns
# import matplotlib.pyplot as plt

# mat = confusion_matrix(y_test,predictions)
# sns.heatmap(mat, square = True, annot = True, cbar = False)
# plt.xlabel('predicted value')
# plt.ylabel('true value')
# print(classification_report(y_test,predictions))

from sklearn.model_selection import GridSearchCV

# defining parameter range
param_grid = {'C': [0.1, 1, 10, 100, 1000, 10000, 100000], 'gamma': [1, 0.1, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.01, 0.009, 0.008, 0.007, 0.006, 0.005, 0.004, 0.003, 0.002, 0.001, 0.001, 0.00001, 0.000001]} 
  
grid = GridSearchCV(SVC(), param_grid, refit = True, verbose = 3)
grid.fit(X_train,y_train)

print(grid.best_estimator_)

grid.best_params_
grid_predictions = grid.predict(X_test)
# accuracy_score(y_test, grid_predictions)

# mat = confusion_matrix(y_test,grid_predictions)
# sns.heatmap(mat, square = True, annot = True, cbar = False)
# plt.xlabel('predicted value')
# plt.ylabel('true value')

# print(classification_report(y_test,grid_predictions))
joblib.dump(grid, 'svc.pkl') 