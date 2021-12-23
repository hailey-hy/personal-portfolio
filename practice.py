def zigzag(a):
    x = 1
    y = 1
    if a == 1:
        return x == 1, y == 1
    while a > 1:
        if x == 1:
            y += 1
            a -= 1
            while y > 1:
                x += 1
                y -= 1
                a -= 1
        if y == 1:
            x += 1
            a -= 1
            while x > 1:
                y += 1
                x -= 1
                a -= 1
    return x, y

x, y = zigzag(int(input()))
print("{0}/{1}".format(x, y))
        

