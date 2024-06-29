#include <iostream>
#include <vector>
#include <string>
using namespace std;

void initializeBoard(vector<vector<char>>& board);
void displayBoard(const vector<vector<char>>& board);
bool isMoveValid(const vector<vector<char>>& board, int row, int col);
bool checkForWin(const vector<vector<char>>& board, char player);
bool checkForDraw(const vector<vector<char>>& board);
void switchPlayer(char& currentPlayer);

int main() {
    vector<vector<char>> board(3, vector<char>(3, ' '));
    char currentPlayer = 'X';
    bool gameWon = false;
    bool gameDraw = false;
    int row, col;

    do {
        displayBoard(board);
        cout << "Player " << currentPlayer << ", enter your move (row and column): ";
        cin >> row >> col;

        if (isMoveValid(board, row, col)) {
            board[row][col] = currentPlayer;

            if (checkForWin(board, currentPlayer)) {
                displayBoard(board);
                cout << "Player " << currentPlayer << " wins! Congratulations!\n";
                gameWon = true;
            } else {
                if (checkForDraw(board)) {
                    displayBoard(board);
                    cout << "It's a draw!\n";
                    gameDraw = true;
                } else {
                    switchPlayer(currentPlayer);
                }
            }
        } else {
            cout << "Invalid move! Try again.\n";
        }

    } while (!gameWon && !gameDraw);

    cout << "Thank you for playing!\n";

    return 0;
}

void initializeBoard(vector<vector<char>>& board) {
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            board[i][j] = ' ';
        }
    }
}

void displayBoard(const vector<vector<char>>& board) {
    cout << "-------------\n";
    for (int i = 0; i < 3; ++i) {
        cout << "| ";
        for (int j = 0; j < 3; ++j) {
            cout << board[i][j] << " | ";
        }
        cout << "\n-------------\n";
    }
}

bool isMoveValid(const vector<vector<char>>& board, int row, int col) {
    return (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ');
}

bool checkForWin(const vector<vector<char>>& board, char player) {
    for (int i = 0; i < 3; ++i) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
            return true;
        }
        if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
            return true;
        }
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
        return true;
    }
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
        return true;
    }
    return false;
}

bool checkForDraw(const vector<vector<char>>& board) {
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (board[i][j] == ' ') {
                return false;
            }
        }
    }
    return true;
}

void switchPlayer(char& currentPlayer) {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
}
