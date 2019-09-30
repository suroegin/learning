"""
List Comprehension.

URL: https://www.hackerrank.com/challenges/list-comprehensions/problem
Solved: 30.09.2019
"""


def main():
    # x = int(input())
    # y = int(input())
    # z = int(input())
    # n = int(input())

    x = 2
    y = 2
    z = 1
    n = 4

    return [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]


if __name__ == '__main__':
    main()
