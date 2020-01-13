#include <stdio.h>

char* SHA1(char* plain) {
	return plain;
}
int main() {
	int i = 0;
	char* myPlainText = (char*)malloc(sizeof(char)*11);
	char*myHash;

	for (; i < 10; *(myPlainText + i) = 'a' + i, i++);//myPlainText=abcdefghij
	*(myPlainText + i) = '\0';


	printf("Plain: %s\n", myPlainText);
	myHash = SHA1(myPlainText);
	printf("Hash: %s\n", myPlainText);

	getchar();
	return 0;
}