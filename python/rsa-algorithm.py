import math

def gcd(a, h):
    temp = 0
    while 1:
        temp = a % h
        if temp == 0:
            return h
        a = h
        h = temp

p = 53
q = 59
e = 11
n = p * q
z = (p - 1) * (q - 1)
k = 2
d = (k * n + 1) % e

while e < z:
    if gcd(e, z) == 1:
        break
    else:
        e = e + 1

print("n=%d\ne=%d\nd=%d" % (n, e, d))

painText = 892
if painText >= 0 and painText < n:
    print("painText=%d" % painText)

    encrypted = (painText ^ d) % n
    print("encrypted=%d" % encrypted)

    decrypted = (encrypted ^ d) % n
    print("decrypted=%d" % decrypted)
