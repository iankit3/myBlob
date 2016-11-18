//#include "Circle.cpp"

class Circle{
private:
    int _radius;

public:
    Circle(int initial_radius)
        : _radius{ initial_radius }
    {}    

    int getRadius(){
        return _radius;
    }
    
    int calculateDiameter();

};