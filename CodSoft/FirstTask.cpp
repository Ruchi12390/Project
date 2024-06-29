#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    char playAgain = 'y';
    
    while (playAgain == 'y') {
        std::srand(static_cast<unsigned int>(std::time(0)));

        int randomNumber = std::rand() % 100 + 1;
        int userGuess = 0;
        int attemptsLeft = 5;

        std::cout << "Welcome to the Number Guessing Game!" << std::endl;
        std::cout << "I have selected a number between 1 and 100. Can you guess it?" << std::endl;

        while (userGuess != randomNumber && attemptsLeft > 0) {
            std::cout << "Attempts left: " << attemptsLeft << std::endl;
            std::cout << "Enter your guess: ";
            std::cin >> userGuess;

            if (userGuess > randomNumber) {
                std::cout << "Too high! Try again." << std::endl;
            } else if (userGuess < randomNumber) {
                std::cout << "Too low! Try again." << std::endl;
            } else {
                std::cout << "Congratulations! You guessed the correct number!" << std::endl;
            }

            attemptsLeft--;
        }

        if (userGuess != randomNumber) {
            std::cout << "Sorry, you ran out of attempts. The correct number was: " << randomNumber << std::endl;
        }

        std::cout << "Do you want to play again? (y/n): ";
        std::cin >> playAgain;
    }

    std::cout << "Thank you for playing! Goodbye." << std::endl;

    return 0;
}
