from random import randint
total=0 # the number that you start with is 0
for i in range(10000): # do everything below over ten thousand times
  wins=0  #sets wins to 0 
  if randint(1,100) <= 87: #picks a number between 1 and 100. if the number is between 1 and 87 then add 1 to the number of wins
    wins=wins+1 # then add 1 to number of wins
  if randint(1,100) <= 65:  #picks a number between 1 and 100. if the number is between 1 and 67 then add 1 to the number of wins
    wins=wins+1# then add 1 to number of wins
  if randint(1,100) <= 17: #picks a number between 1 and 100. if the number is between 1 and 17 then add 1 to the number of wins
    wins=wins+1 # then add 1 to number of wins
  if wins>=2: #compare the number of wins to see if its greater 2 
    total+=1 # then add 1 to total 
chance= (total/((float(10000))) # makes it into a percent to print out 
print "your chance in winning is %s" % chance #prints out the statement in quotes
  
