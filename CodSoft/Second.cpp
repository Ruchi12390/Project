#include <iostream>
#include <vector>
#include <string>

struct Task {
    std::string description;
    bool completed;

    Task(const std::string& desc) : description(desc), completed(false) {}
};

class ToDoList {
private:
    std::vector<Task> tasks;

public:
    void addTask(const std::string& description) {
        tasks.push_back(Task(description));
    }

    void viewTasks() const {
        if (tasks.empty()) {
            std::cout << "No tasks to display." << std::endl;
        } else {
            std::cout << "Tasks:" << std::endl;
            for (size_t i = 0; i < tasks.size(); ++i) {
                std::cout << i + 1 << ". ";
                if (tasks[i].completed) {
                    std::cout << "[X] ";
                } else {
                    std::cout << "[ ] ";
                }
                std::cout << tasks[i].description << std::endl;
            }
        }
    }

    void markCompleted(size_t index) {
        if (index >= 1 && index <= tasks.size()) {
            tasks[index - 1].completed = true;
        }
    }

    void removeTask(size_t index) {
        if (index >= 1 && index <= tasks.size()) {
            tasks.erase(tasks.begin() + index - 1);
        }
    }
};

int main() {
    ToDoList toDoList;
    char choice;

    do {
        std::cout << "\n===== To-Do List Manager =====" << std::endl;
        std::cout << "1. Add Task" << std::endl;
        std::cout << "2. View Tasks" << std::endl;
        std::cout << "3. Mark Task as Completed" << std::endl;
        std::cout << "4. Remove Task" << std::endl;
        std::cout << "5. Exit" << std::endl;
        std::cout << "Enter your choice: ";
        std::cin >> choice;

        switch (choice) {
            case '1': {
                std::cin.ignore();
                std::string description;
                std::cout << "Enter task description: ";
                std::getline(std::cin, description);
                toDoList.addTask(description);
                break;
            }
            case '2':
                toDoList.viewTasks();
                break;
            case '3': {
                size_t index;
                std::cout << "Enter task number to mark as completed: ";
                std::cin >> index;
                toDoList.markCompleted(index);
                break;
            }
            case '4': {
                size_t index;
                std::cout << "Enter task number to remove: ";
                std::cin >> index;
                toDoList.removeTask(index);
                break;
            }
            case '5':
                std::cout << "Exiting program." << std::endl;
                break;
            default:
                std::cout << "Invalid choice. Please enter a number from 1 to 5." << std::endl;
                break;
        }
    } while (choice != '5');

    return 0;
}
