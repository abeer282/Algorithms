'''
#evaluating mathematical expression using postfix calculator 
#all operators and operands must be separated by space
#
'''

class Calculator(object):
    def evaluate(self, string):
        exp = string.split()
        postfix = []
        operators_stack = []
        for i in exp:
            if '0' <= i[0] <= '9':
                postfix.append(i)
            elif len(operators_stack) == 0 or i == '(' or i == '^':
                operators_stack.append(i)
            elif i == ')':
                top = operators_stack.pop()
                while top != '(':
                    postfix.append(top)
                    top = operators_stack.pop()
            elif i in '*/':
                while len(operators_stack) > 0 and operators_stack[-1] in '*/^':
                    postfix.append(operators_stack.pop())
                operators_stack.append(i)
            else:  # +or-
                while len(operators_stack) > 0:
                    postfix.append(operators_stack.pop())
                operators_stack.append(i)
        while len(operators_stack) > 0:
            postfix.append(operators_stack.pop())
        operands_stack = []
        for i in postfix:
            if '0' <= i[0] <= '9':
                if '.' in i:
                    operands_stack.append(float(i))
                else:
                    operands_stack.append(int(i))
            else:
                op1 = operands_stack.pop()
                op2 = operands_stack.pop()
                result = 0
                if i == '+':
                    result = op2 + op1
                elif i == '-':
                    result = op2 - op1
                elif i == '*':
                    result = op2 * op1
                elif i == '/':
                    result = op2 / op1
                elif i == '^':
                    result = op2 ** op1
                operands_stack.append(result)
        return operands_stack[0]


#calc = Calculator()
#print(calc.evaluate("1 + 2 + 3 * 4"), calc.evaluate("3 ^ 3 + 5"), calc.evaluate("2 + ( 3 * 8 ^ 2 ) + 3 * 3 / 9"))


