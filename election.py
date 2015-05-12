from random import randint
total=0 # sets the total elections won 
for i in range(10000): # repeats procces 10000 times because the range is 10,000
  wins=0  #sets wins in regions to 0 
  if randint(1,100) <= 87: #picks a number between 1-100 and if its between 1-87 - follow next step 
    wins=wins+1 # add smaller regional wins to wins 
  if randint(1,100) <= 65:  #picks a number between 1-100 and if its between 1-64 - follow next step 
    wins=wins+1# add smaller regional wins to wins 
  if randint(1,100) <= 17: #picks a number between 1-100 and if its between 1-17 - follow next step 
    wins=wins+1 # add smaller regional wins to wins 
  if wins>=2: #dettermined if has 2 or more regional wins
    total+=1 # if so thean adds to toal aka the complete election 
chance= (total/((float(10000))) # makes it into a percent to print out 
print "your chance in winning is %s" % chance #prints out statement and percent 
  
