* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #f3f6f9;
  color: #1f2937;
}

header {
  background: #ffffff;
  padding: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

header h1 {
  font-size: 28px;
}

header p {
  color: #6b7280;
  margin-top: 5px;
}

.clock-box {
  text-align: right;
}

#clock {
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
}

main {
  width: min(1100px, 92%);
  margin: 30px auto;
}

.hero {
  margin-bottom: 25px;
}

.hero h2 {
  margin-bottom: 8px;
}

#dailyStatus {
  color: #6b7280;
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.stat-card span {
  display: block;
  color: #6b7280;
  font-size: 14px;
}

.stat-card strong {
  display: block;
  font-size: 26px;
  margin-top: 10px;
}

.card {
  background: white;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
}

.card h2 {
  margin-bottom: 8px;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 20px;
}

.attendance-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.attendance-card {
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 12px;
}

.attendance-card h3 {
  margin-bottom: 8px;
}

.attendance-card p {
  color: #6b7280;
  margin-bottom: 15px;
}

.session-status {
  min-height: 40px;
  margin-bottom: 15px;
  font-size: 14px;
}

button {
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  background: #2563eb;
  color: white;
  width: 100%;
}

button:hover {
  opacity: 0.9;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.secondary {
  background: #6b7280;
  margin-top: 10px;
}

.activity-list {
  display: grid;
  gap: 12px;
}

.activity-item {
  border: 1px solid #e5e7eb;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
}

.activity-item input {
  margin-right: 10px;
}

.question-box {
  margin-bottom: 20px;
}

.question-box label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

textarea {
  width: 100%;
  min-height: 100px;
  resize: vertical;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-family: inherit;
}

.hidden {
  display: none !important;
}

#reflectionLocked {
  padding: 20px;
  background: #f3f4f6;
  border-radius: 10px;
}

.chart-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.chart-tabs button {
  width: auto;
}

.active-tab {
  background: #111827;
}

.chart-wrapper {
  position: relative;
  height: 300px;
}

.insight-box {
  margin-top: 20px;
  padding: 15px;
  background: #f3f4f6;
  border-radius: 10px;
}


/* ========================= */
/* KASUS MINGGUAN */
/* ========================= */

.weekly-case {
  border-top: 4px solid #2563eb;
}

.weekly-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.level-box {
  background: #f3f4f6;
  border-radius: 10px;
  padding: 10px 18px;
  text-align: center;
}

.level-box span {
  display: block;
  font-size: 11px;
  color: #6b7280;
}

.level-box strong {
  display: block;
  font-size: 25px;
  margin-top: 3px;
}

.case-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 15px 0;
}

.case-meta span {
  padding: 8px 12px;
  background: #f3f4f6;
  border-radius: 20px;
  font-size: 13px;
}

.case-question {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  margin-bottom: 25px;
}

.case-question small {
  color: #6b7280;
  font-weight: bold;
}

.case-question h3 {
  margin: 8px 0;
}

.case-question p {
  color: #4b5563;
  line-height: 1.6;
}

.case-progress {
  margin-bottom: 20px;
}

.progress-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
}

.progress-fill {
  width: 0%;
  height: 100%;
  background: #2563eb;
  transition: width 0.3s ease;
}

.system-step {
  display: grid;
  grid-template-columns: 45px 1fr;
  gap: 15px;
  padding: 18px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin-bottom: 12px;
}

.step-letter {
  width: 42px;
  height: 42px;
  background: #111827;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.step-content h3 {
  margin-bottom: 5px;
}

.step-content p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 10px;
}

.step-content textarea {
  min-height: 90px;
}

.case-bottom {
  border-top: 1px solid #e5e7eb;
  margin-top: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.case-bottom p {
  color: #6b7280;
  font-size: 14px;
  margin-top: 5px;
}

.case-bottom button {
  max-width: 220px;
}


/* ========================= */
/* MODAL GAME */
/* ========================= */

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: min(600px, 100%);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
}

.small-modal {
  width: min(400px, 100%);
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#timer {
  font-size: 28px;
  font-weight: bold;
}

#gameInstruction {
  margin: 20px 0;
}

#gameArea {
  min-height: 300px;
  position: relative;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  overflow: hidden;
  padding: 15px;
}

.target {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #ef4444;
  cursor: pointer;
}

.number-button {
  width: 70px;
  height: 60px;
  margin: 8px;
  font-size: 20px;
}

.memory-box {
  width: 70px;
  height: 70px;
  margin: 5px;
  display: inline-block;
  background: #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
}

.memory-active {
  background: #2563eb;
}


@media (max-width: 700px) {

  header {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .clock-box {
    text-align: left;
  }

  .stats-grid,
  .attendance-grid {
    grid-template-columns: 1fr;
  }

  .chart-wrapper {
    height: 250px;
  }

  .weekly-header {
    flex-direction: column;
  }

  .case-bottom {
    flex-direction: column;
    align-items: stretch;
  }

  .case-bottom button {
    max-width: none;
  }

  .system-step {
    grid-template-columns: 1fr;
  }

  .step-letter {
    width: 38px;
    height: 38px;
  }
}
