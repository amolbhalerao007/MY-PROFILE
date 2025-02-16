function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showProject(projectId) {
    const projects = {
        project1: {
            title: "<b> MACHINE LEARNING </b> <br>", // <b> is a HTML tag that makes text bold
            image: "<img src=\"image/mac.webp\" alt=\"\" style=\"width: 30%; height: 10%; border-radius:30px;\">",
            description: "<b>Machine learning</b><br> is a branch of artificial intelligence that enables computers to learn <br> from data and improve their performance without being explicitly programmed.<br> It involves training models to recognize patterns and make decisions.<br> <br><b>ARTIFICIAL INTELLIGENCE</b> <br><img src=\"image/art in.jpg\" alt=\"\" style=\"width: 30%; height: 10%; border-radius:30px;\"><br>AI is the broader concept of machines or software mimicking human intelligence, <br>including problem-solving,learning, perception, and decision-making. Machine learning is a subset of AI.<br> <br><b>SUPERVISE LEARNING</b><br><img src=\"image/supervise.jpg\" alt=\"\" style=\"width: 30%; height: 10%; border-radius:30px;\"><br><b>Supervised Learning</b><br> In supervised learning, the model is trained using labeled data, meaning each input <br> has a corresponding correct output. Examples include spam email detection and image classification. <br><br><b>UNSUPERVISED LEARNING</b><br><img src=\"image/unsuper.webp\" alt=\"\" style=\"width: 30%; height: 10%; border-radius:30px;\"><br><b>Unsupervised Learning</b><br>Unsupervised learning involves training models on unlabeled data, allowing them to find <br>hidden patterns and relationships. Examples include customer segmentation and anomaly detection.<br><br><b>DEEP-LEARNING</b><br><img src=\"image/deep.jpg\" alt=\"\" style=\"width: 30%; height: 10%; border-radius:30px;\"><br> <b>Deep LearningDeep</b><br>learning is a specialized form of machine learning that uses artificial neural networks with multiple layers.<br> It excels at handling complex tasks like image recognition, natural language processing, and autonomous driving.",
            // link: "https://amolbhalerao007.github.io/Interest-Calculator/"
            link: "#"
        },
        project2: {
            title: "<b>Predictive Analytics</b>",
            description: `<b>ISSUE OVERVIEW:</b> <br> Your phone is experiencing charging problems—it either charges very slowly or not at all, despite using the same charger.<br> To resolve the issue, you need to diagnose the problem, troubleshoot potential causes, and find an effective solution.<br><br><b> Step-by-Step Troubleshooting and Debugging Process: <br> </b> <b>1. Diagnosing the Problem</b> <br> 
            <ul>
                <li>Check Charging
                    <ul>
                        <li>Does the phone charge when plugged in, or is there no response?</li>
                        <li>Is the charging speed unusually slow?</li>
                        <li>Does the phone stop charging when moved?</li>
                    </ul>
                </li>
                <li>Try Different Charging
                    <ul>
                        <li>Use a different cable, adapter, or power outlet.</li>
                        <li>Try wireless charging (if available).</li>
                    </ul>
                </li>
                <li>Look for Physical Damage
                    <ul>
                        <li>Inspect the charging cable for cuts or bends.</li>
                        <li>Check the charging port for dirt, dust, or damage.</li>
                        <li>Examine the charger brick for overheating or burns.</li>
                    </ul>
                </li>
                <li>Software
                    <ul>
                        <li>Restart the phone and see if the problem persists.</li>
                        <li>Check for pending software updates.</li>
                        <li>Look at battery usage stats to see if any apps are draining power abnormally.</li>
                    </ul>
                </li>
            </ul> <br> <b> FINDINGS:</b> <br> The phone charges slowly or not at all, and the charging speed is inconsistent. The phone stops charging when moved, and the battery drains quickly. The charging port is dirty and damaged, and the charging cable is bent and frayed. The charger brick is overheating and has burn marks. The phone has pending software updates and apps that are draining power abnormally. <br> <br><b> RECOMMENDATIONS:</b><br> Clean the charging port and cable, and replace them if necessary. Use a different charger and power outlet to see if the problem persists. Update the phone's software and check for apps draining power. If the issue continues, contact a professional for further assistance.
            <ul>    
                <li>The phone only charges at certain angles suggesting a loose connection.</li>
                <li>The charging port has visible dust and lint.</li>
                <li>Other chargers work better than the current one.</li>
                <li>The phone charges faster when using a wireless charger.</li>
            </ul> <br> <b>2.Debugging and Isolating the Problem</b>
<ul>
    <li>Testing Different Components:</li>
    <li>Used another charger → Worked fine → Original charger may be faulty.</li>
    <li>Used the same charger on another phone → Worked → Phone’s charging port may be the issue.</li>
    <li>Cleaning the Charging Port:</li>
    <li>Used a toothpick and compressed air to remove dust.</li>
    <li>Software Check:</li>
    <li>Restarted phone → No change.</li>
    <li>Updated software → No improvement.</li>
</ul>
                    <ul>
                        <li>Used a toothpick and compressed air to remove dust.</li>
                    </ul>
                </li>
                <li>Software Check:
                    <ul>
                        <li>Restarted phone → No change.</li>
                        <li>Updated software → No improvement.</li>
                    </ul>
                </li>
            </ul> <br><b>3. Solving the Problem/Implementing Solutions</b> <br> <b>Based on the findings, the following solutions were applied:</b><br><br>
1.	 Cleaning the charging port – After removing lint and dust, the charging connection improved. <br>
2.	Replacing the charging cable – The old cable was slightly frayed, affecting power delivery. <br>
3.	Avoiding charging at awkward angles – Bending the cable too much could worsen the port connection over time.<br>
4.	If problems persisted: Would take the phone to a repair shop to check for internal port damage.<br>
      <r><b>FINAL OUTCOME:</b><br>
After cleaning the port and switching to a new cable, the phone started charging normally again.
<br> <br><b>Conclusion</b><br>
By systematically diagnosing the issue, testing different components, and isolating the cause, the problem was resolved without unnecessary repair costs.
`,
            link: "#"
        },

        project3: {
            title: "Project 3: Personal Blog",
            description: "A personal blog created with HTML, CSS, and a bit of JavaScript to make it interactive. It features a modern, minimalistic layout.",
            link: "#"
        }
    };

    const project = projects[projectId];
    const container = document.querySelector(".container");

    container.innerHTML = `
        <h3>${project.title}</h3>
        ${project.image ? project.image : ''}
        <p>${project.description}</p>
        <a href="#" onclick="goBack()" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">Go Back</a>`;
    }
    /* <a href="${project.link}">Check out the project</a> */

function goBack() {
    window.location.reload(); // Refreshes the page to go back to the portfolio

}
