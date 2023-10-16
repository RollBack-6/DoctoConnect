import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {
    let data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange'
            ],
            borderColor: [
                'red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange'
            ]
        }]
    }

    let options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }
    return (
        <div>
            <Bar
                height={300}
                data={data}
                options={options}
            />
        </div>
    )
}

export default BarChart
