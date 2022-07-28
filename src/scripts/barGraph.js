
import data from '../../data/10567_pev_sales';


class Bargraph {
    constructor(state){
        this.state = state;
        this.drawBargraph();
    }
    
    drawBargraph(){
        new Chart(document.getElementById("bar-chart"), {
            type: 'horizontalBar',
            data: {
                labels: ['Audi A3 Plug In',
                    'Audi e-tron',
                    'BMW 3-series Plug In',
                    'BMW 5-Series Plug In',
                    'BMW 7-series Plug In',
                    'BMW X5',
                    'BMW active E',
                    'BMW i3',
                    'BMW i8',
                    'Cadillac CT6',
                    'Cadillac ELR',
                    'Chevy Bolt',
                    'Chevy Spark',
                    'Chevy Volt',
                    'Chrysler Pacifica Plug In Hybird',
                    'Fiat 500E',
                    'Ford C-Max Energi',
                    'Ford Focus EV',
                    'Ford Fusion',
                    'Honda Accord',
                    'Honda Clarity BEV',
                    'Honda Clarity Plug In',
                    'Honda Fit EV',
                    'Hyundai Ioniq EV',
                    'Hyundai Ioniq Plug In',
                    'Hyundai Kona Electric',
                    'Hyundai Sonata Plug In',
                    'Jaguar I-Pace',
                    'Kia Niro Plug In',
                    'Kia Optima Plug In',
                    'Kia Soul EV',
                    'Kia niro EV',
                    'MINI Countryman S E',
                    'Mercedes B-Class',
                    'Mercedes C350We',
                    'Mercedes GLC 350e Hybrid',
                    'Mercedes GLE 550e',
                    'Mercedes S550 Plug',
                    'Mitsubishi Ev',
                    'Mitsubishi Outlander Plug In',
                    'Nissan Leaf',
                    'Porsche Cayenne S E-Hybird',
                    'Porsche Panamera S E-Hybird',
                    'Prius PHEV',
                    'Smart ED',
                    'Subaru Crosstrek Hybird',
                    'Tesla Model S',
                    'Tesla Model X',
                    'Tesla model 3',
                    'Toyota RAV4 EV',
                    'VW e-Golf',
                    'Volvo S90 Plug In',
                    'Volvo XC60 Plug In',
                    'Volvo-XC90'],
                datasets: [
                    {
                        label: "Number of Sales",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: [10191,
                            5369,
                            8326,
                            17865,
                            1149,
                            16837,
                            673,
                            41988,
                            6776,
                            461,
                            2892,
                            58208,
                            7399,
                            156733,
                            15854,
                            15195,
                            42231,
                            9245,
                            68509,
                            1039,
                            2816,
                            30233,
                            1071,
                            1516,
                            3355,
                            1721,
                            6185,
                            2987,
                            7440,
                            2827,
                            6507,
                            1562,
                            2533,
                            4170,
                            4881,
                            3026,
                            3169,
                            1801,
                            2104,
                            6976,
                            141888,
                            7122,
                            5742,
                            116927,
                            8485,
                            880,
                            162285,
                            87033,
                            296392,
                            2399,
                            18277,
                            956,
                            4305,
                            7556]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Vehicle Sales by Model'
                }
            }
        });



    }
}
export default Bargraph;