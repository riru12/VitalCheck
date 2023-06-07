import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score

data = pd.read_csv('heart.csv')


X = data.iloc[:,[1,3,5,7,8,9,10,11,12]].values                                                      # independent variables
y = data.iloc[:,13].values                                                                          # dependent variables

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=1)           # make a train and test split of the data

regressor = LinearRegression()                                                                      # make a linear regression model
regressor.fit(X_train, y_train)                                                                     # fit it to the training data

y_pred = regressor.predict(X_test)

#sns.scatterplot(x=y_test, y = y_pred, ci=None, s=140)
sns.scatterplot(x=y_test, y = y_pred,s=140)
plt.xlabel('y_test data')
plt.ylabel('Predictions')

print('MAE:', mean_absolute_error(y_test,y_pred))
print("MSE",mean_squared_error(y_test,y_pred))
print("RMSE",np.sqrt(mean_squared_error(y_test,y_pred)))
r2 = r2_score(y_test,y_pred)
print(r2)