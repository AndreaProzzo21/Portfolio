import numpy as np

pw = ''
option = ['simboli','lettere','numeri']
simboli= ['!','£','$','%','&','/','?','*']
lettere= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','Z','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','z','w','x','y']
numeri= ['0','1','2','3','4','5','6','7','8','9']
while(len(pw) < 8):
    x = np.random.randint(0,3)
    if(x == 0):
        s = np.random.randint(7)
        pw += (simboli[s])
    if(x == 1):
        l = np.random.randint(51)
        pw += (lettere[l])
    if(x == 2):
        n = np.random.randint(9)
        pw += (numeri[n])

print(pw)








