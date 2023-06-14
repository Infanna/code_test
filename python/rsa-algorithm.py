import math

def gcd(a, h):
    temp = 0
    while 1:
        temp = a % h
        if temp == 0:
            return h
        a = h
        h = temp

p = 3
q = 7
n = p * q
e = 2
z = (p - 1) * (q - 1)
print("z=", z)
if e > 1 and e < z:


    while e < z:
        if gcd(e, z) == 1:
            break
        else:
            e = e + 1

    k = 2
    d = ((k * z) + 1) / e

    print("n=%f\ne=%f\nd=%f" % (n, e, d))

    painText = 12.0
    if painText >= 0 and painText < n:
        print("painText=", painText)

        encrypted = math.fmod(pow(painText, e), n)
        print("encrypted=", encrypted)

        decrypted = math.fmod(pow(encrypted, d), n)
        print("decrypted=", decrypted)
    else:
        print("function not supported this painText")

else:
    print("value e not supported")