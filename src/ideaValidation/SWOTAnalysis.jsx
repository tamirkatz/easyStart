// import React, { useState } from 'react';
// import SWOTCategory from './SWOTCategory';
// import styles from './SWOTAnalysis.module.scss';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { DndContext, closestCenter } from '@dnd-kit/core';
// import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

// // Register the necessary chart components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const SWOTAnalysis = () => {
//   const [swotData, setSwotData] = useState({
//     strengths: ['Innovative idea', 'Strong team'],
//     weaknesses: ['Limited funding', 'Lack of market experience'],
//     opportunities: ['Growing market', 'Technological advancements'],
//     threats: ['Strong competition', 'Economic downturns']
//   });

//   const handleDragEnd = ({ active, over }) => {
//     if (active.id !== over.id) {
//       const [category, index] = active.id.split('-');
//       const newIndex = over.data.current.sortable.index;

//       const updatedItems = arrayMove(swotData[category], parseInt(index), newIndex);
//       setSwotData({
//         ...swotData,
//         [category]: updatedItems
//       });
//     }
//   };

//   const chartData = {
//     labels: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
//     datasets: [
//       {
//         label: 'SWOT Analysis',
//         data: [
//           swotData.strengths.length,
//           swotData.weaknesses.length,
//           swotData.opportunities.length,
//           swotData.threats.length
//         ],
//         backgroundColor: ['#4caf50', '#f44336', '#2196f3', '#ff9800']
//       }
//     ]
//   };

//   const addItem = (category, item) => {
//     setSwotData({
//       ...swotData,
//       [category]: [...swotData[category], item]
//     });
//   };

//   const removeItem = (category, index) => {
//     const updatedCategory = swotData[category].filter((_, i) => i !== index);
//     setSwotData({
//       ...swotData,
//       [category]: updatedCategory
//     });
//   };

//   return (
//     <div className={styles.swotAnalysis}>
//       <h1>SWOT Analysis Tool</h1>
//       <p>
//         SWOT Analysis is a strategic planning technique used to identify the strengths, weaknesses,
//         opportunities, and threats related to your business venture. It helps in understanding the
//         internal and external factors that can impact your startup.
//       </p>
//       <div className={styles.grid}>
//         <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//           {['strengths', 'weaknesses', 'opportunities', 'threats'].map(category => (
//             <SortableContext
//               key={category}
//               items={swotData[category].map((_, index) => `${category}-${index}`)}
//               strategy={verticalListSortingStrategy}
//             >
//               <SWOTCategory
//                 category={category}
//                 items={swotData[category]}
//                 addItem={addItem}
//                 removeItem={removeItem}
//               />
//             </SortableContext>
//           ))}
//         </DndContext>
//       </div>
//       <div className={styles.chartContainer}>
//         <Bar data={chartData} />
//       </div>
//       <button className={styles.exportButton} onClick={() => exportToPDF(swotData)}>Export to PDF</button>
//     </div>
//   );
// };

// const exportToPDF = (swotData) => {
//   // Implement export to PDF functionality here
//   console.log('Exporting to PDF:', swotData);
// };

// export default SWOTAnalysis;
