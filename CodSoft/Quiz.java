import java.util.*;

class Quiz {
    boolean answerSubmit;
    boolean timeUp;
    int i = 0;
    int flag;
    public static void main(String args[]) {
        Quiz q = new Quiz();
        Scanner sc = new Scanner(System.in);
        int score = 0;
        Timer timer = new Timer();
        String[] question = {
            "Bar Charts are used for : ",
            "Consider the following statements\nStatement A : To flatten” the dataframe, you can use the reset_index()\nStatement B : Use the nunique() to get counts of unique values on a Pandas Series.",
            "Which of the following is not a measure of dispersion?",
            "def m(data)\nDiff = max(data)-min(data)\nreturn(Diff)\nThe above defined data function in Python programming, will calculate the?",
            "Frequency polygons are used for:"
        };
        String[][] options = {
            {"1. Continuous data", "2. Categorical data", "3. both a. and b.", "4. None of these"},
            {"1. Both statements are correct", "2. Both statements are false", "3. A is correct, B is false", "4. B is correct, A is false"},
            {"1. Skewness", "2. Kurtosis", "3. Range","4. Percentile"},
            {"1. Inter quartile range", "2. mode", "3. median","4. range"},
            {"1. Continuous data", "2. Categorical data", "3. both a. and b.", "4. None of these"}
        };
        int[] correctAnswers = {2,1,4,4,1}; 
        List<String> array=new ArrayList<String>();
        while (q.i < question.length) {
            q.flag=1;
            q.answerSubmit = false;
            System.out.println((q.i+1)+". "+question[q.i]);
            for (String option : options[q.i]) {
                System.out.println(option);
            }

            TimerTask task = new TimerTask() {
                @Override
                public void run() {
                    if (!q.answerSubmit) {
                        System.out.println("Times Up");
                        q.flag=0;
                        array.add("Time Exceed for this");
                        q.answerSubmit = true; 
                    }
                }
            };
            timer.schedule(task, 10000);

            while (!q.answerSubmit) {
                if (sc.hasNextInt()) {
                    int answer = sc.nextInt();
                    q.answerSubmit = true;
                    if (answer == correctAnswers[q.i] && q.flag!=0) {
                        array.add("Correct");
                        score++;
                    }
                    else if(q.flag!=0){
                        array.add("InCorrect");
                    }
                } else {
                    sc.next(); 
                }
            }
            q.i++;
            timer.cancel();
            timer = new Timer(); 
        }
        System.out.println("Your score is: " + score+"\n");
        System.out.println("QuiZ Summary");
        for(int k=0;k<array.size();k++){
             System.out.println((k+1)+". "+question[k]+" : "+array.get(k));
             System.out.println("The Correct Answer is : "+options[k][correctAnswers[k]-1]);
             System.out.println("");
        }
        sc.close();
    }
}
