#include <iostream>
#include "Circle.h"

int main(){

int x = 10;
int& xref{x};

xref = 20;

std::cout << xref <<std::endl;

}