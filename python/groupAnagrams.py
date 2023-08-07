x = ["eat", "tea", "tan", "ate", "nat", "bat"]
y = []
z = 0
n = 0

for i in x:
    for j in i:
        for k in i:
            n = n + 1
            if n == 3:
                n = 0
                z = 0
            if j == k:
                z = z + 1
