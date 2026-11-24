const DATA = {"categories":[{"id":"monitoring","name":"Patient Monitoring","blurb":"Multi-parameter monitors, pulse oximeters, BP & capnography","icon":"monitor"},{"id":"cardiology","name":"Cardiology & Diagnostics","blurb":"ECG machines, Holter recorders, spirometers & Dopplers","icon":"heart"},{"id":"respiratory","name":"Respiratory & Sleep","blurb":"BiPAP, CPAP, oxygen concentrators, nebulizers & suction","icon":"lung"},{"id":"infusion","name":"Infusion & Fluid","blurb":"Syringe & infusion pumps, fluid warmers, DVT pumps","icon":"drop"},{"id":"emergency","name":"Emergency & Resuscitation","blurb":"Defibrillators, AEDs & video laryngoscopes","icon":"bolt"},{"id":"surgical","name":"Surgical & OT","blurb":"Electrosurgical units, OT tables, lights & tourniquets","icon":"scalpel"},{"id":"maternal","name":"Maternal & Neonatal","blurb":"Fetal monitors & Dopplers, warmers, phototherapy","icon":"baby"},{"id":"poc","name":"Point-of-Care","blurb":"Thermometers, vein finders & bedside diagnostics","icon":"pulse"}],"products":[{"id":"mpm","cat":"monitoring","name":"Multi-Parameter Patient Monitor","subtitle":"8\"–12.1\" ICU / OT monitors for adult, pediatric & neonatal patients","image":"monitor_cms6000.jpg","featured":true,"models":["CMS6000","VD-8M","Hwatime XM-750","VD-9000B","VD-9000T","Yonker YK-8000C"],"tags":["ECG","NIBP","SpO2","Temp","IBP-ready"],"features":["8\" TFT colour display, multi-language interface","ECG, NIBP, SpO2, Pulse Rate, Respiration, Temperature & IBP (upgradable)","Up to 8-channel synchronous waveform display","96-hour graphic & tabular trends, 500 NIBP record storage","AC/DC built-in rechargeable lithium battery for uninterrupted monitoring"],"specs":{"Display":"8\" TFT colour LCD","ECG":"5 / 12 lead selectable","Heart rate":"Adult 15–300 bpm","NIBP":"Oscillometry, 10–270 mmHg","SpO2":"0–100%, accuracy ±2%","Temperature":"Dual-channel, 0–50 °C","Net weight":"3.9 kg"},"certs":["FDA","CE"]},{"id":"mindray-epm12","cat":"monitoring","name":"Mindray ePM12 Patient Monitor","subtitle":"12\" capacitive touchscreen with Masimo SET® SpO2","image":"monitor_epm12.jpg","featured":true,"models":["Mindray ePM12"],"brand":"Mindray","tags":["Touchscreen","Masimo SET®","Afib","IP44"],"features":["12\" multi-gesture capacitive touchscreen, intuitive UI","3/5-lead ECG, Masimo SET® SpO2, NIBP, Respiration, Temperature","Arrhythmia analysis with atrial fibrillation (Afib) detection","48 hours of full disclosure, trend, alarm & event storage","IP44 rated, medical-grade plastics for stringent cleaning"],"specs":{"Display":"12\" capacitive touch","Waveforms":"10","Weight":"10.6 lbs","Battery":"Li-ion 4500 mAh, ≥4 h","Recorder":"3-trace thermal (optional)","Connectivity":"HL7, DIAP"},"certs":["FDA","CE"]},{"id":"bpl-ultima","cat":"monitoring","name":"BPL Ultima Prime-D Monitor","subtitle":"12.1\" high-resolution monitor with ST analysis","image":null,"models":["BPL Ultima-Prime-D"],"brand":"BPL","tags":["ST analysis","Dual IBP","EtCO2-ready"],"features":["12.1\" TFT high-resolution display, optional touchscreen","Arrhythmia detection & ST analysis","ECG, RESP, digital SpO2, NIBP, Temp standard","Optional dual IBP, EtCO2, AGM, ICG & thermal recorder","BPL Medius+ central nursing station connectivity"],"specs":{"Display":"12.1\" TFT","Waveforms":"up to 10","Dimensions":"318 × 264 × 152 mm","Weight":"4.5 kg","Brand":"BPL"},"certs":["FDA","CE"]},{"id":"comen-monitors","cat":"monitoring","name":"Premium Bedside Monitors","subtitle":"Branded multi-para monitors from leading OEMs","image":"monitor_comen.jpg","featured":true,"models":["Contec CMS7000","Contec CMS8000","Contec CMS9000","Philips Goldway GS20","COMEN STAR8000E","Schiller Truscope-III","EDAN-X12"],"tags":["Multi-brand","ICU-grade"],"features":["12.1\" TFT colour displays, fanless anti-cross-infection design","All-round monitoring for adult, pediatric & neonate","Up to 8-channel waveform, HRV analysis, drug calculation","NIBP modes Manual/Auto/STAT with up to 4800 record storage","Central Monitoring System connectivity via Wi-Fi / wired"],"specs":{"Display":"12.1\" TFT","ECG":"3 / 5-lead","Arrhythmia":"71 events, 60 alarms","NIBP":"Oscillometry","Dimensions":"314 × 145 × 264 mm","Weight":"3.9 kg"},"certs":["FDA","CE"]},{"id":"oximeter-table","cat":"monitoring","name":"Tabletop Pulse Oximeter","subtitle":"Bench-top SpO2 monitoring with NIBP","image":null,"models":["CMS-70A","CMS5100"],"tags":["SpO2","NIBP","Trend"],"features":["TFT + LED display with plethysmogram & bar graph","SpO2 0–100% (1% resolution), PR 30–250 bpm","Reliable readings in weak-filling conditions","Built-in rechargeable Li-polymer battery","Real-time data transmission to PC"],"specs":{"Display":"TFT + LED, 320×240","SpO2 accuracy":"±2% (70–100%)","PR range":"30–250 bpm","Power":"AC 100–240 V","Weight":"1.5 kg (CMS5100)"},"certs":["FDA","CE"]},{"id":"oximeter-hand","cat":"monitoring","name":"Handheld Pulse Oximeter","subtitle":"Portable SpO2 for ward rounds & transport","image":null,"models":["Mindray PM60","Nellcor PM10N","Covidien Nellcor PM-100","Bionet Oxy9wave","CMS-60C","CMS60D1","VD-H200","VDBM-NT1C"],"tags":["Portable","PI","Rechargeable"],"features":["2.8\" colour display with SpO2, PR & PI","Suitable for adult, pediatric & neonatal patients","Adjustable audible & visual alarms","Up to 8 hours continuous working on rechargeable battery","Storage & USB/Bluetooth data upload to PC"],"specs":{"Screen":"2.8\" colour","SpO2":"0–100%, ±2%","PR":"30–250 bpm","PI":"0–20%","Battery":"Li-ion / AA options"},"certs":["FDA","CE"]},{"id":"oximeter-finger","cat":"monitoring","name":"Fingertip Pulse Oximeter","subtitle":"Compact spot-check SpO2 & pulse","image":null,"models":["BPL Smart-Oxy","CMS50D Pro","CMS50D"],"tags":["Fingertip","OLED","Spot-check"],"features":["0.96\" colour OLED, multi-direction display","SpO2 70–100% (±2%), PR 30–250 bpm","Low-power & auto standby","Adjustable brightness with PR sound prompt","Up to 20 hours of use on 2× AAA batteries"],"specs":{"Display":"0.96\" colour","SpO2":"0–100%, ±2%","PR":"30–250 bpm","Power":"2× AAA","Class":"Type BF applied part"},"certs":["FDA","CE"]},{"id":"abpm","cat":"monitoring","name":"Ambulatory BP Monitor","subtitle":"24-hour NIBP Holter for hypertension studies","image":null,"models":["CMS-ABPM50"],"tags":["24-hour","Adult/Ped/Neo","PC software"],"features":["24-hour ambulatory NIBP, up to 350 measurement records","Automatic & manual measurement, up to 300 manual records","HD colour TFT with trend graph & big-font modes","mmHg / kPa units, low-power & error prompts","PC software for trend, histogram & report printing"],"specs":{"Mode":"Upper-arm oscillometry","Interval":"15/30/60/120/240 min","Range":"0–290 mmHg","PR":"40–240 bpm","Power":"2× AA","Safety":"Type BF, defib-proof"},"certs":["FDA","CE"]},{"id":"etco2","cat":"monitoring","name":"EtCO2 Capnograph Monitor","subtitle":"Handheld sidestream & mainstream capnography","image":null,"models":["Contec CA10S (Sidestream)","Contec CA10M (Mainstream)"],"tags":["EtCO2","RR","SpO2"],"features":["End-tidal CO2 & respiration-rate measurement","SpO2 & pulse-rate measurement (CA10S)","Over-limit alarms for EtCO2, RR, SpO2 & PR","1.3\" true-colour LCD, compact & lightweight","For pre-hospital transport, ED, ICU, OT & neonatology"],"specs":{"EtCO2 range":"0–150 mmHg","Resolution":"1 mmHg","RR":"2–150 rpm","SpO2":"30–100% (CA10S)","Protection":"IPX2 (CA10M)"},"certs":["FDA","CE"]},{"id":"ecg","cat":"cardiology","name":"12-Lead ECG Machine","subtitle":"1 / 3 / 6 / 12-channel electrocardiographs","image":"ecg_vd1200e.jpg","featured":true,"models":["VD-300E","VD-600E","VD-1200E","CMS100G","CMS300G","CMS300GA","CMS600G","CMS1200G"],"tags":["12-lead","Thermal print","Auto-analysis"],"features":["12-lead synchronous sampling with digital signal processing","Thermal printer, 5.7\"–10.2\" colour touch + push-button","Auto measurement, calculation, analysis & waveform freezing","USB flash & SD memory, PC transmission via RS232/USB","Built-in rechargeable Li-ion battery, AC/DC conversion"],"specs":{"Leads":"12-lead synchronous","Input":"Floating & defibrillation protected","Frequency response":"0.05–150 Hz","CMRR":"≥100 dB","Sampling":"1000 Hz / 12-bit","Paper":"80 / 110 / 216 mm thermal"},"certs":["FDA","CE"]},{"id":"ecg-brand","cat":"cardiology","name":"Branded ECG Recorders","subtitle":"Bionet & BPL electrocardiographs","image":null,"models":["CardioCare2000","Genx-3","Cardio7","CARDIART-6208-View","Cardiart-9108","CARDIART-9108-D"],"tags":["Multi-brand","Clinical-grade"],"features":["Reliable 1/3/6/12-channel recording from trusted OEMs","Auto-interpretation & measurement of ECG parameters","Thermal printing with adjustable sensitivity & speed","Case memory & PC review software","Portable designs for ward, clinic & field use"],"specs":{"Leads":"up to 12-lead","Display":"LCD / colour","Recording":"Thermal","Brands":"Bionet, BPL"},"certs":["FDA","CE"]},{"id":"holter","cat":"cardiology","name":"ECG Holter Recorder","subtitle":"24–48 hour continuous ambulatory ECG","image":null,"models":["CMS-TLC6000 (48 h)","CMS-TLC5000 (24 h)"],"tags":["12-lead","48-hour","Afib analysis"],"features":["Standard 12-lead, continuous recording up to 48 hours","Flexible atrial-fibrillation & pacemaker analysis","10+ templates for premature beats, long interval & Afib","HRT, T-wave alternans, QTD, VCG & VLP analysis modules","Fast review with 5-min, 1-hour & whole-record HRV"],"specs":{"Lead":"Standard 12-lead","Record time":"24–48 h","CMRR":"≥60 dB","Scan speed":"25 mm/s ±5%","Interface":"USB 2.0"},"certs":["FDA","CE"]},{"id":"spirometer","cat":"cardiology","name":"Diagnostic Spirometer","subtitle":"Portable lung-function testing","image":null,"models":["CMS-SP80B","CMS-SP10"],"tags":["FVC","FEV1","PEF"],"features":["Measures FVC, FEV1, FEV1/FVC, PEF, FEF25/50/75","Flow-volume & volume-time chart display","Patient profile, trend chart & calibration function","Data storage, upload & review via Bluetooth / USB","Rechargeable lithium battery, 2.8\" LCD"],"specs":{"Volume range":"0–10 L","Volume accuracy":"±3% or ±0.05 L","Flow range":"0–16 L/s","Weight":"190 g"},"certs":["FDA","CE"]},{"id":"vascular-doppler","cat":"cardiology","name":"Vascular Doppler","subtitle":"Peripheral arterial & venous blood-flow assessment","image":null,"models":["Bistos BT-200V","VCOMIN-VD-320"],"tags":["4/5/8 MHz","Waveform","Portable"],"features":["High-sensitivity Doppler probe, ergonomic & light","Real-time waveform, data & working parameters","For andrology, urology, microsurgery & plastic surgery","AC & DC battery operation, freeze-display on LCD","USB data transfer, loudspeaker & earphone output"],"specs":{"Ultrasound":"4 / 5 / 8 MHz","HR range":"50–240 bpm","Accuracy":"±2%","Battery life":"≈360 min","Interface":"Sound card"},"certs":["FDA","CE"]},{"id":"bipap","cat":"respiratory","name":"BiPAP Ventilator","subtitle":"Bilevel therapy for respiratory support","image":"bipap_resmart.jpg","featured":true,"models":["BMC RESmart BiPAP Y-30T","Yuwell Auto BiPAP YH-830","Ventmed Bipap Ds8 St30","Philips BiPAP DreamStation"],"tags":["S/T","Auto","Humidifier"],"features":["Target tidal volume with automatic pressure support","Real-time monitoring of pressure, flow, Vte, RR, MV & leak","CPAP, S, S/T, T operating modes","3.5\" colour LCD, 5-step humidifier adjustment","Advanced leak compensation & synchrony"],"specs":{"Modes":"CPAP, S, S/T, T, Auto","Pressure":"4–30 cmH2O","Display":"3.5\" colour LCD","Humidifier":"Integrated, 5-step","Weight":"1.5–2.5 kg"},"certs":["FDA","CE"]},{"id":"cpap","cat":"respiratory","name":"Auto CPAP","subtitle":"Continuous positive airway pressure for sleep apnea","image":null,"models":["BMC Auto CPAP G2","BMC Auto CPAP G2S A20","BMC Auto CPAP G3 A20","Yuwell Auto CPAP YH550","BMC M1 Mini Auto CPAP"],"tags":["Auto","Integrated humidifier","Quiet"],"features":["2.4\" colour screen, 3-button simple operation","Integrated humidifier with large heating plate","Noise as low as 28 dB with optimized reduction design","Automatic leak & altitude compensation","SD-card recording of therapy & fault data"],"specs":{"Mode":"Auto CAP / CAP","Pressure":"4–20 hPa","Humidifier":"Integrated, up to 360 ml","Noise":"<28 dB","Protection":"IP22"},"certs":["FDA","CE"]},{"id":"hfnc","cat":"respiratory","name":"High-Flow Humidifier","subtitle":"Heated humidified high-flow oxygen therapy","image":null,"models":["BMC H-80 Series (H80AS / H80A / H80M)"],"tags":["Up to 80 L/min","Auto O2","9-stage humidity"],"features":["Up to 80 L/min air-oxygen mixed gas delivery","Automatic target oxygen concentration control (21–100%)","Disinfection-free design with backflow-prevention valve","9-stage humidification, 7-level humidity compensation","Hot-standby & real-time monitoring of O2, flow & temp"],"specs":{"Flow rate":"2–80 L/min","O2 range":"21–100%","Screen":"3.5\"","Humidity":"9-stage","Temp range":"29–37 °C"},"certs":["FDA","CE"]},{"id":"oxygen","cat":"respiratory","name":"Oxygen Concentrator","subtitle":"PSA oxygen delivery for home & clinic","image":"oxygen_oxy5.jpg","featured":true,"models":["OXY-5 (5 L)","JAY-5 (5 L)","JAY-5W (5 L)","JAY-10W (10 L dual-flow)"],"tags":["PSA","93% purity","Low noise"],"features":["Pressure Swing Absorption (PSA) technology","93% ±3% oxygen purity with adjustable flow","Large LCD display with purity & fault alarms","Continuous oxygen delivery with maintenance reminder","Four-wheel mobility & easy-change washable filters"],"specs":{"Flow rate":"1–5 L/min (10 L dual-flow)","Purity":"93% ±3%","Outlet pressure":"6–10 PSI","Sound":"≤46–50 dB","Power":"AC 230 V, 50 Hz"},"certs":["FDA","CE"]},{"id":"nebulizer","cat":"respiratory","name":"Ultrasonic Nebulizer","subtitle":"Fine-mist medication delivery","image":"nebulizer_402ai.jpg","models":["Yuwell 402AI"],"tags":["Ultrasonic","350 ml","Hospital/Home"],"features":["1.7 MHz ultrasonic nebulization, ≥3 mL/min rate","350 ml reservoir with large & small cup options","High efficiency, low maintenance & compact design","Suitable for hospital, clinical & home use","Quiet, durable & easy to clean"],"specs":{"Frequency":"1.7 MHz ±10%","Capacity":"150 / 350 ml","Rate":"≥3 mL/min","Power":"≤50 W","Voltage":"AC 220 V ±10%"},"certs":["FDA","CE"]},{"id":"suction","cat":"respiratory","name":"Suction Machine","subtitle":"Electric & pedal surgical suction apparatus","image":null,"models":["Yuwell 7A-23B","Yuwell 7A-23D","Yuwell 7E-A/B","Yuwell 7B Pedal Suction"],"tags":["Oil-free","High vacuum","Twin-jar"],"features":["Oil-free piston pump — no daily oiling, clean & safe","High negative pressure with large flow","Twin 2.5 L glass jars with self-locking caps","Anti-backflow design keeps liquid from re-entering","Pedal model for power-free operation in the field"],"specs":{"Negative pressure":"≥0.09 MPa","Pumping rate":"20–40 L/min","Noise":"≤65 dB","Reservoir":"1000–2500 mL","Power":"AC 220 V"},"certs":["FDA","CE"]},{"id":"sleep-screen","cat":"respiratory","name":"Sleep Screener & Air-O2 Blender","subtitle":"Home sleep testing & oxygen blending","image":null,"models":["BMC PolyWatch YH-600 B Pro","Air Oxygen Blender"],"tags":["Sleep study","CPAP flow","Blender"],"features":["Portable sleep-screening with SpO2 & flow monitoring","CPAP-pressure recording for therapy evaluation","Precision air-oxygen blending for respiratory support","Compact, bedside-friendly design","Data download for clinical review"],"specs":{"Use":"Home sleep test","Parameters":"SpO2, flow, pressure","Type":"Screener + blender"},"certs":["FDA","CE"]},{"id":"syringe-pump","cat":"infusion","name":"Syringe Infusion Pump","subtitle":"Precision micro-infusion for critical care","image":"syringe_byz810.jpg","featured":true,"models":["BYZ-810","CMS-SP950"],"tags":["5–60 ml","Voice alarm","Stackable"],"features":["Rate mode & time-volume mode with HD LCD","Compatible with 5/10/20/30/50/60 ml syringes of any brand","Human-voice alarm system for malfunctions","Three-level occlusion (high / medium / low) + KVO","Freely stackable for multi-solution therapy"],"specs":{"Syringe":"5–60 ml","Rate":"0.1–1500 ml/h","Accuracy":"±3%","KVO":"0.1–5 ml/h","Battery":"Li, 4 h backup","Weight":"2.2 kg"},"certs":["FDA","CE"]},{"id":"infusion-pump","cat":"infusion","name":"Volumetric Infusion Pump","subtitle":"Accurate fluid delivery for any IV set","image":"infusion_bys820.jpg","models":["BYS-820","CMS-SP750"],"tags":["1–1200 ml/h","Air-bubble detect","KVO"],"features":["HD LCD, compatible with any brand of infusion set","Ultrasonic air-bubble detection & occlusion alarms","Three-level occlusion with human-voice alarm","Anti-Bolus System prevents high-dose injection","AC/DC with Li battery & records last infusion settings"],"specs":{"Rate":"1–1200 ml/h","Accuracy":"±5%","Occlusion":"3 levels","KVO":"1–5 ml/h","Protection":"IPX1–IPX4","Weight":"1.8 kg"},"certs":["FDA","CE"]},{"id":"fluid-warmer","cat":"infusion","name":"IV / Blood Fluid Warmer","subtitle":"In-line warming for IV fluids & blood","image":null,"models":["VD-FW101"],"tags":["35–42 °C","Portable","5 alarms"],"features":["Accurate temperature control for IV fluids & blood","35–42 °C adjustable range, LED display","Three heating-groove lengths (25/31/52 cm)","Over-temperature protection with five alarms","Mounts on IV stand with bracket, no training needed"],"specs":{"Temp setting":"35–42 °C","Accuracy":"±1 °C","Warm-up":"≤2 min","Overheat cut-off":"46 °C","Power":"AC 100–240 V","Weight":"0.2–0.4 kg"},"certs":["FDA","CE"]},{"id":"dvt-pump","cat":"infusion","name":"DVT Compression Pump","subtitle":"Intermittent compression for thrombosis prevention","image":null,"models":["Devon Cirona 6200","KOLENO900"],"tags":["DVT prophylaxis","Calf/Thigh","Portable"],"features":["Intermittent pneumatic compression to prevent blood clots","Customizable for one or both legs, calf & thigh garments","Smart cable management reduces wire & hose clutter","Visual alarms for easy fault finding","Affordable for clinics, nursing homes & homecare"],"specs":{"Pressure":"40 mmHg","Inflation cycle":"12 s","Rest period":"48 s","Weight":"5.1 lbs","Battery":"Li 10.8 V, 4400 mAh"},"certs":["FDA","CE"]},{"id":"defib","cat":"emergency","name":"Biphasic Defibrillator","subtitle":"Manual & AED defibrillators with monitor","image":"defib_vddf.jpg","featured":true,"models":["VD-DF201","VD-DF301","VD-DF401","BPL DF 2617 AED R","DF-KIO-MED-270j","BPL DF-2509R"],"tags":["2–360 J","Manual + AED","Pacer-ready"],"features":["7\" colour TFT with ECG display & printer/recorder","Biphasic truncated exponential, 2–360 J in 15 steps","Manual, AED & synchronized cardioversion modes","Optional SpO2, NIBP, pacemaker & EtCO2","24-hour graphical/tabular trend of ECG, SpO2, NIBP, EtCO2"],"specs":{"Energy":"2–360 J","Waveform":"Biphasic truncated exp.","Charge time":"<7 s","Display":"7\" colour TFT","Battery":"11.1 V Li, 3 h monitor","Weight":"6.5 kg"},"certs":["FDA","CE"]},{"id":"aed","cat":"emergency","name":"Automated External Defibrillator (AED)","subtitle":"Two-button lifesaving defibrillation","image":"aed_mb7000.jpg","featured":true,"models":["M&B-AED7000"],"tags":["Biphasic","Voice prompts","Self-test"],"features":["Three-step, two-button operation with 20 audible prompts","Extensive voice & visual prompts for the operator","Weekly self-test to ensure readiness","Continuous event recording for reporting","Lock-out protection prevents inadvertent shock"],"specs":{"Energy sequence":"150 / 150 / 200 J","Analysis time":"9 s","Charge time":"8 s (150 J)","Battery":"12 V DC 3.0 Ah","Shelf life":"10 years"},"certs":["FDA","CE"]},{"id":"laryngoscope","cat":"emergency","name":"Video Laryngoscope","subtitle":"HD-guided intubation with recording","image":null,"models":["VD-VL100"],"tags":["3\" LCD","Rotatable","Recording"],"features":["3\" LCD rotatable 120° for flexible viewing","High-quality NTSC/PAL video with clear imaging","Loop & seamless video recording for real-time switching","Low-voltage alarm prevents unexpected shutdown","3 standard blades + 2 optional blades included"],"specs":{"Screen":"3\" LCD, 120° rotatable","Battery":"Li 3.7 V","Video":"NTSC / PAL","Blades":"3 standard + 2 optional"},"certs":["FDA","CE"]},{"id":"esu","cat":"surgical","name":"Electrosurgical Unit (Cautery)","subtitle":"Microprocessor monopolar & bipolar generators","image":null,"featured":true,"models":["VDBM-CM300","VDBM-CM400","VD-CM250","VD-CM400 PLUS","VD-Sparsh 400","VD-Monoseal Prime","VD-Excel Sealer","VD-Crown","VD-URO BITUR","ANALOG VD-SSE-300","ANALOG VD-SSE-TUR"],"tags":["Monopolar","Bipolar","Vessel sealing"],"features":["Microprocessor-based electrosurgical generator","Monopolar (Cut & Coag) + Bipolar modes integrated","Feedback-controlled response for high precision & safety","Spray coagulation for excellent hemostasis","For micro-surgery, laparoscopy & neurosurgery"],"specs":{"Cut power":"up to 400 W","Coag power":"120–150 W","Bipolar":"80–100 W","Frequency":"480 kHz","Display":"7-segment LED / digital","Weight":"4 kg"},"certs":["FDA","CE"]},{"id":"ot-table","cat":"surgical","name":"Operating Table (OT Table)","subtitle":"Multi-position surgical operating table","image":null,"models":["OT Table"],"tags":["Electro-hydraulic","Radiolucent","Multi-position"],"features":["Multiple articulated sections for all surgical positions","Electro-hydraulic height, tilt & trend adjustment","Radiolucent top for C-arm imaging","Detachable head & leg plates with accessory rails","Stable base with locking castors"],"specs":{"Type":"Electro-hydraulic","Movements":"Height, tilt, trend, flex","Top":"Radiolucent, sectional"},"certs":["FDA","CE"]},{"id":"ot-light","cat":"surgical","name":"OT & Spot Light","subtitle":"LED surgical & examination lighting","image":"otlight.jpg","featured":true,"models":["Ceiling / Mobile OT Light","Mobile Spot Light"],"tags":["LED","Shadowless","Mobile"],"features":["High-intensity shadowless LED surgical illumination","Mobile floor-stand & ceiling-mount options","Flexible gooseneck spot light for examination","Cool, true-colour light for accurate tissue rendering","Smooth-rolling 5-castor base"],"specs":{"Source":"LED","Mount":"Mobile / ceiling","Use":"OT & examination"},"certs":["FDA","CE"]},{"id":"endo-camera","cat":"surgical","name":"HD Endoscopy Camera & Light Source","subtitle":"Full-HD imaging chain for endoscopy","image":null,"models":["VD-Full HD Camera","VD-Light Source"],"tags":["Full HD","LED source","Endoscopy"],"features":["Full-HD endoscopy camera with crisp imaging","High-output LED cold light source","Compatible with rigid & flexible scopes","Front-panel controls with white-balance","Clear visualization for MIS procedures"],"specs":{"Camera":"Full HD","Light":"LED cold source","Use":"Laparoscopy / endoscopy"},"certs":["FDA","CE"]},{"id":"tourniquet","cat":"surgical","name":"Digital Tourniquet","subtitle":"Automatic pneumatic limb tourniquet","image":null,"models":["VD-DT01 (single)","VD-DT02 (dual channel)"],"tags":["50–400 mmHg","Dual channel","Autoclavable cuffs"],"features":["Fully automatic microcontroller-based smart control","Single or dual independent channels (DT02)","Auto pressure calibration & battery-level indication","Alarms for pressure leak, elapsed time & low battery","Autoclavable silicone cuffs in multiple sizes"],"specs":{"Pressure":"50–400 mmHg","Timer":"1 min–5 h","Accuracy":"±3 mmHg","Battery":"7 h backup","Display":"16×2 backlit LCD","Weight":"1.3–1.85 kg"},"certs":["FDA","CE"]},{"id":"fetal-monitor","cat":"maternal","name":"Fetal Monitor (CTG)","subtitle":"Antepartum FHR, UC & FM monitoring","image":"fetal_cms800g.jpg","featured":true,"models":["Contec CMS-800G","Bistos BT-350"],"tags":["FHR","TOCO","Twins"],"features":["Colour LCD, 60° convertible screen with clear curves","FHR normal-range marking (120–160 bpm) & abnormal alarm","Real-time 24-hour monitoring with 12-hour playback","Optional twins monitoring & high-resolution printer","Central Monitoring System connectivity"],"specs":{"FHR range":"50–240 bpm","Accuracy":"±2 bpm","TOCO":"0–100%","Probe":"1.0 MHz, 9-crystal","Print":"112 mm thermal","Weight":"≈3 kg"},"certs":["FDA","CE"]},{"id":"fetal-doppler","cat":"maternal","name":"Fetal Doppler","subtitle":"Pocket & tabletop FHR detection","image":null,"models":["VCOMIN-FD-530D","VCOMIN-FD-200C","VCOMIN-FD-300D","VCOMIN-FD-300C","BPL-FD-01","BPL-FD-9714"],"tags":["2–2.5 MHz","Colour LCD","Rechargeable"],"features":["High-fidelity, crystal-clear fetal heart sound","High-sensitivity waterproof Doppler probe","Colour / touch LCD with FHR display","USB data transfer & FHR curve storage/playback","Rechargeable battery with earphone & speaker"],"specs":{"Ultrasound":"2–2.5 MHz","FHR range":"50–240 bpm","Resolution":"1 bpm","Accuracy":"±2 bpm","Power":"Rechargeable / alkaline"},"certs":["FDA","CE"]},{"id":"warmer","cat":"maternal","name":"Infant Radiant Warmer","subtitle":"Servo-controlled neonatal warming","image":"warmer_ambw01.jpg","featured":true,"models":["AM-BW01 (Skin probe)","VD-BW02 (Skin + air)","VD-ST"],"tags":["Servo control","Apgar timer","Phototherapy-ready"],"features":["Advanced servo & air control modes with one-touch use","Focussed reflector heater for even heat distribution","Skin temperature on 1\" bright red LED display","10-step heater output, programmable power & time","Apgar timer / attend-baby alarm"],"specs":{"Modes":"Skin / Air / Manual","Temp range":"25–39 °C","Heater":"600–800 W","Power":"230 V AC","Trolley":"Fixed / movable"},"certs":["FDA","CE"]},{"id":"phototherapy","cat":"maternal","name":"LED Phototherapy Unit","subtitle":"High-intensity neonatal jaundice therapy","image":null,"models":["VD-SPT"],"tags":["LED","Overhead","Mobile"],"features":["Power LED phototherapy for neonatal hyperbilirubinemia","High-intensity blue light with uniform irradiance","Height-adjustable overhead unit on mobile stand","Long-life LEDs with low heat generation","Tiered cradle design for infant comfort"],"specs":{"Source":"Power LED (blue)","Mount":"Mobile overhead","Use":"Neonatal jaundice"},"certs":["FDA","CE"]},{"id":"jaundice","cat":"maternal","name":"Transcutaneous Jaundice Detector","subtitle":"Non-invasive neonatal bilirubin screening","image":null,"models":["VD-JD15","VD-JD"],"tags":["Non-invasive","<12 s","Memory 20"],"features":["Non-invasive transcutaneous bilirubin measurement","Results in <12 seconds — no blood sampling","Fiber-optics & spectrum-splitter optical design","LCD display, self-calibration & 20-record memory","Low energy use with long service life"],"specs":{"Range":"0.0–30.0 mg/dL","Prep time":"<12 s","Reexam rate":"<10%","Power":"2× AA","Weight":"215 g"},"certs":["FDA","CE"]},{"id":"thermometer","cat":"poc","name":"Non-Contact Infrared Thermometer","subtitle":"Touch-free forehead temperature screening","image":"thermo_yt1c.jpg","featured":true,"models":["Yuwell-YT1C"],"tags":["Non-contact","°C/°F","Fever alert"],"features":["Infrared reading with no physical contact","Beep, vibration & yellow alert for high temperature","Safe for newborns, children & adults","LCD display, switchable °C / °F","Auto shut-off to conserve battery"],"specs":{"Range":"32.0–42.9 °C","Accuracy":"±0.2 °C","Distance":"0–5 cm","Auto-off":"30 s","Power":"2× AAA","Certification":"ISO13485 / CE"},"certs":["CE"]},{"id":"vein-finder","cat":"poc","name":"Infrared Vein Finder","subtitle":"Real-time 3D vein visualization","image":"vein_ivf05.jpg","featured":true,"models":["VD-IVF05"],"tags":["3D display","HD imaging","Mobile cart"],"features":["Helps clinicians find veins in real time","Vein depth shown via 3D full-colour display","HD microvascular imaging on an FPGA platform","3 imaging modes for different skin colours","360° rotating wheels & 4-hour battery operation"],"specs":{"Projection distance":"29–31 cm","Wavelength":"750–980 nm","Illuminance":"300–1000 lux","Power":"Rechargeable Li-ion","Use":"Palms, arms, feet, forehead"},"certs":["FDA","CE"]}],"brands":["Philips","GE Healthcare","Mindray","BPL","Schiller","Dräger","Getinge","Stryker","Medtronic","Contec","Erba","Leica","Molbio","Olympus","Appaswamy","Morbos","MarkEn","Fujifilm","Allengers","Hamilton","Prognosys","Fresenius","Yuwell","Bistos"],"clients":[["KIMS – Sunshine Hospitals","Begumpet"],["Yashoda Hospitals","Hitech City"],["Apollo Hospitals","Jubilee Hills"],["Aster Prime Hospital","Ameerpet"],["NIMS Hospital","Panjagutta"]]};

/* ============ ICONS ============ */
const IC = {
 monitor:'<path d="M3 4h18v12H3z"/><path d="M8 20h8M12 16v4"/><path d="M6 10l2.5-3 2 4 2.5-5 2 4H18"/>',
 heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/><path d="M5 12h3l1.5-3 2 5 1.5-2h3"/>',
 lung:'<path d="M12 4v8"/><path d="M12 8c0 5-3 4-3 8 0 2-1 3-3 3s-3-2-3-4c0-5 3-7 5-8 2-1 4-1 4 1z"/><path d="M12 8c0 5 3 4 3 8 0 2 1 3 3 3s3-2 3-4c0-5-3-7-5-8-2-1-4-1-4 1z"/>',
 drop:'<path d="M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z"/><path d="M9 14a3 3 0 003 3"/>',
 bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
 scalpel:'<path d="M20 4L9 15l-3 .8.8-3L18 2z"/><path d="M6 15l-3 6 6-3"/>',
 baby:'<circle cx="12" cy="8" r="4"/><path d="M8 7h.01M16 7h.01M10 10a3 3 0 004 0"/><path d="M5 21c1-4 4-6 7-6s6 2 7 6"/>',
 pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
 check:'<path d="M20 6L9 17l-5-5"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 bolt2:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M16 5a3 3 0 010 6M22 20c0-2.5-2-4-4-4.5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 tag:'<path d="M3 3h8l9 9-8 8-9-9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
 chat:'<path d="M21 12a8 8 0 01-11.6 7L3 21l1.9-6.3A8 8 0 1121 12z"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 minus:'<path d="M5 12h14"/>',
 cart:'<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
 send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7"/>',
 building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
};
function icon(n,cls){return '<svg class="svgi '+(cls||'')+'" viewBox="0 0 24 24">'+(IC[n]||IC.monitor)+'</svg>';}

/* category accent colors for icon-cards */
const CATCOLOR={monitoring:['#0b4699','#2f7fd1'],cardiology:['#0a3f88','#3f8ad6'],
 respiratory:['#0d52a8','#4a90d9'],infusion:['#0a4291','#2d79c8'],emergency:['#0b3c84','#3a86cf'],
 surgical:['#083a7e','#2f7fd1'],maternal:['#104f9c','#4f94db'],poc:['#0a4696','#357fce']};
function catMeta(id){return DATA.categories.find(c=>c.id===id)||{};}

/* ============ STATE ============ */
let cart = loadCart();
let catFilter='all', catQuery='', globalQuery='';

function loadCart(){try{return JSON.parse(localStorage.getItem('inquis_cart')||'[]')}catch(e){return[]}}
function saveCart(){try{localStorage.setItem('inquis_cart',JSON.stringify(cart))}catch(e){}}

/* ============ SEO & VIEW CONFIG ============ */
const VIEW_SEO = {
  home: {
    title: 'Inquis Life Care Sciences — Medical Equipment, Accessories & Consumables | Hyderabad, India',
    desc: 'Inquis Life Care Sciences LLP is an authorized distributor of hospital & medical equipment across India. Patient monitors, 12-lead ECG machines, defibrillators, BiPAP ventilators, OT lights, and neonatal care in Hyderabad, Telangana.'
  },
  catalog: {
    title: 'Medical Equipment Catalog & Hospital Supplies | Inquis Life Care Sciences',
    desc: 'Browse our complete catalog of 36+ hospital medical devices across 8 categories: ICU patient monitors, ECG machines, BiPAP/CPAP ventilators, defibrillators, surgical ESU, and neonatal equipment.'
  },
  about: {
    title: 'About Us — Inquis Life Care Sciences | Healthcare Technology Partner',
    desc: 'Founded by inquisitive doctors, Inquis Life Care Sciences is an authorized distributor and partner delivering high-quality, certified medical technologies to hospitals pan-India.'
  },
  contact: {
    title: 'Contact Us & Request a Quote — Inquis Life Care Sciences | Hyderabad',
    desc: 'Get in touch with Inquis Life Care Sciences for medical equipment quotes, product demos, and after-sales service. Reach our office in Balkampet, Hyderabad.'
  }
};

function updateViewSEO(view){
  const meta = VIEW_SEO[view] || VIEW_SEO.home;
  document.title = meta.title;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', meta.desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.desc);
}

/* ============ NAV / ROUTER ============ */
function go(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  document.querySelectorAll('nav.main a').forEach(a=>a.classList.toggle('active',a.dataset.nav===view));
  window.scrollTo({top:0,behavior:'instant'in document.documentElement.style?'instant':'auto'});
  if(view==='catalog')renderCatalog();
  setTimeout(observeReveals,50);
  history.replaceState(null,'','#'+view);
  updateViewSEO(view);
}
function scrollToId(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}

/* ============ RENDER HOME ============ */
function buildHome(){
  // hero art
  const art=document.getElementById('heroArt');
  art.innerHTML=`
   <div class="float-card fc1"><img src="img/monitor_cms6000.jpg" alt="Patient Monitor"><div class="fc-cap">${icon('monitor')} Patient Monitor</div></div>
   <div class="float-card fc2"><img src="img/defib_vddf.jpg" alt="Defibrillator"><div class="fc-cap">${icon('bolt')} Defibrillator</div></div>
   <div class="float-card fc3"><img src="img/oxygen_oxy5.jpg" alt="Oxygen Concentrator"><div class="fc-cap">${icon('lung')} O₂ Concentrator</div></div>
   <div class="float-card fc4"><img src="img/syringe_byz810.jpg" alt="Syringe Pump"><div class="fc-cap">${icon('drop')} Syringe Pump</div></div>
   <div class="hero-badge hb1"><div class="ico">${icon('shield')}</div><div><b>FDA · CE</b><span>Certified range</span></div></div>`;
  // hero bg dots pattern
  document.getElementById('heroBg').innerHTML=dnaPattern();
  document.querySelectorAll('.catalog-head .hero-bg,.page-head .hero-bg').forEach(e=>e.innerHTML=dnaPattern());

  // categories
  document.getElementById('catGrid').innerHTML=DATA.categories.map((c,i)=>{
    const n=DATA.products.filter(p=>p.cat===c.id).length;
    return `<div class="cat-tile reveal ${'d'+(i%4)}" onclick="go('catalog');setTimeout(()=>{setCat('${c.id}')},60)">
      <div class="cat-ico">${icon(c.icon)}</div>
      <h3>${c.name}</h3><p>${c.blurb}</p>
      <div class="cat-link">${n} products ${icon('arrow')}</div></div>`;
  }).join('');

  // featured
  const feat=DATA.products.filter(p=>p.featured).slice(0,8);
  document.getElementById('featGrid').innerHTML=feat.map((p,i)=>cardHTML(p,i)).join('');

  // brands marquee (doubled for loop)
  const bset=DATA.brands.concat(DATA.brands);
  document.getElementById('brandMarquee').innerHTML=bset.map(b=>
    `<div class="brand-pill">${icon('check')} ${b}</div>`).join('');

  // clients
  document.getElementById('clientGrid').innerHTML=DATA.clients.map((c,i)=>
    `<div class="client-card reveal ${'d'+(i%4)}"><div class="client-ico">${icon('building')}</div><b>${c[0]}</b><span>${c[1]}</span></div>`).join('');

  // why
  const why=[
    ['users','Inquisitive Doctors','A strong team driven by a shared purpose to redefine healthcare.'],
    ['bolt2','High-End Technology','State-of-the-art medical devices and high-quality equipment.'],
    ['globe','Strong Network','Serving hospitals, clinics and healthcare institutions pan-India.'],
    ['tag','Competitive Pricing','World-class equipment at the right value for every project.'],
    ['chat','Dedicated Support','Customer support before, during and after delivery.'],
    ['gear','Seamless Execution','Helping clients create world-class healthcare facilities.'],
  ];
  document.getElementById('whyGrid').innerHTML=why.map((w,i)=>
    `<div class="why-card reveal ${'d'+(i%3)}"><div class="why-ico">${icon(w[0])}</div><h3>${w[1]}</h3><p>${w[2]}</p></div>`).join('');

  // footer categories
  document.getElementById('footerCats').innerHTML='<h4>Categories</h4>'+DATA.categories.map(c=>
    `<a onclick="go('catalog');setTimeout(()=>setCat('${c.id}'),60)">${c.name}</a>`).join('');
}
function dnaPattern(){
  let s='<svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none">';
  s+='<defs><pattern id="hex" width="56" height="48" patternUnits="userSpaceOnUse"><path d="M28 0l24 14v20L28 48 4 34V14z" stroke="rgba(255,255,255,.18)" stroke-width="1" fill="none"/></pattern></defs>';
  s+='<rect width="1200" height="600" fill="url(#hex)" opacity=".5"/>';
  s+='<g stroke="rgba(162,196,234,.4)" stroke-width="2.5" fill="none"><path d="M120 20c70 55-70 110 0 165s-70 110 0 165"/><path d="M240 20c-70 55 70 110 0 165s70 110 0 165"/></g>';
  s+='</svg>';
  return s;
}

/* ============ CARD ============ */
function cardHTML(p,i){
  const cat=catMeta(p.cat);
  const nModels=p.models.length;
  const tags=(p.tags||[]).slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('');
  let media;
  if(p.image){
    media=`<div class="card-media"><img src="img/${p.image}" alt="${p.name}" loading="lazy">
      <span class="media-model">${p.models[0]}</span></div>`;
  }else{
    const col=CATCOLOR[p.cat]||['#0b4699','#2f7fd1'];
    media=`<div class="card-media icon-media" style="--mediabg:linear-gradient(150deg,${col[0]},${col[1]})">
      <span class="card-ico">${icon(cat.icon)}</span><span class="media-model">${p.models[0]}</span></div>`;
  }
  const cert=(p.certs||[]).map(c=>`<span class="chip-cert">${c}</span>`).join('');
  return `<div class="card reveal ${'d'+(i%4)} ${p.featured?'featured-ribbon':''}" onclick="openModal('${p.id}')">
    ${media}<div class="card-cert">${cert}</div>
    <div class="card-body">
      <div class="card-cat">${cat.name}</div>
      <h3>${p.name}</h3>
      <div class="csub">${p.subtitle}</div>
      <div class="card-tags">${tags}</div>
      <div class="card-foot">
        <span class="models-n">${nModels} model${nModels>1?'s':''}</span>
        <button class="btn-add" onclick="event.stopPropagation();addToCart('${p.id}')">${icon('plus')} Enquire</button>
      </div>
    </div></div>`;
}

/* ============ CATALOG ============ */
function buildFilters(){
  const total=DATA.products.length;
  let h=`<div class="filt-item ${catFilter==='all'?'active':''}" onclick="setCat('all')"><span>All Products</span><span class="fn">${total}</span></div>`;
  h+=DATA.categories.map(c=>{
    const n=DATA.products.filter(p=>p.cat===c.id).length;
    return `<div class="filt-item ${catFilter===c.id?'active':''}" onclick="setCat('${c.id}')"><span>${c.name}</span><span class="fn">${n}</span></div>`;
  }).join('');
  document.getElementById('filterList').innerHTML=h;
}
function setCat(id){catFilter=id;buildFilters();renderCatalog();document.getElementById('filterPanel').classList.remove('mobopen');window.scrollTo({top:document.querySelector('.catalog-head').offsetHeight-20,behavior:'smooth'});}
function catSearchInput(v){catQuery=v.toLowerCase().trim();renderCatalog();}
function renderCatalog(){
  buildFilters();
  let list=DATA.products.slice();
  if(catFilter!=='all')list=list.filter(p=>p.cat===catFilter);
  if(catQuery){
    list=list.filter(p=>(p.name+' '+p.subtitle+' '+p.models.join(' ')+' '+(p.tags||[]).join(' ')+' '+(p.brand||'')).toLowerCase().includes(catQuery));
  }
  const sort=document.getElementById('sortSel').value;
  if(sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='za')list.sort((a,b)=>b.name.localeCompare(a.name));
  else if(sort==='cat')list.sort((a,b)=>a.cat.localeCompare(b.cat)||a.name.localeCompare(b.name));
  else list.sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
  document.getElementById('resCount').textContent=list.length;
  // active cat pill
  const wrap=document.getElementById('activeCatWrap');
  if(catFilter!=='all'){const cm=catMeta(catFilter);
    wrap.innerHTML=`<span class="active-cat-pill">${cm.name}<button onclick="setCat('all')">${icon('x')}</button></span>`;}
  else wrap.innerHTML='';
  const grid=document.getElementById('catalogGrid');
  const empty=document.getElementById('emptyState');
  if(list.length===0){grid.innerHTML='';empty.style.display='block';}
  else{empty.style.display='none';grid.innerHTML=list.map((p,i)=>cardHTML(p,i)).join('');}
  setTimeout(observeReveals,30);
}
function toggleFilters(){document.getElementById('filterPanel').classList.toggle('mobopen');}

/* ============ GLOBAL SEARCH ============ */
function toggleSearch(){const s=document.getElementById('searchBar');s.classList.toggle('open');if(s.classList.contains('open'))setTimeout(()=>document.getElementById('globalSearch').focus(),120);}
function globalSearchInput(v){globalQuery=v.toLowerCase().trim();if(globalQuery.length>0){go('catalog');document.getElementById('catSearch').value=v;catQuery=globalQuery;renderCatalog();}}

/* ============ PRODUCT MODAL ============ */
let modalProd=null;
function openModal(id){
  const p=DATA.products.find(x=>x.id===id);if(!p)return;modalProd=p;
  const cat=catMeta(p.cat);
  let media;
  if(p.image){media=`<div class="modal-media"><img src="img/${p.image}" alt="${p.name}"></div>`;}
  else{const col=CATCOLOR[p.cat]||['#0b4699','#2f7fd1'];
    media=`<div class="modal-media icon-media" style="--mediabg:linear-gradient(150deg,${col[0]},${col[1]})"><span class="big-ico">${icon(cat.icon)}</span></div>`;}
  const certs=(p.certs||[]).map(c=>`<span class="cert-badge">${icon('check')}${c} Certified</span>`).join('');
  const feats=(p.features||[]).map(f=>`<li>${icon('check')}<span>${f}</span></li>`).join('');
  const specs=Object.entries(p.specs||{}).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  const models=(p.models||[]).map(m=>`<div class="model-chip">${icon('check')}${m}</div>`).join('');
  document.getElementById('prodModal').innerHTML=`
    <button class="modal-close" onclick="closeModal()">${icon('x')}</button>
    <div class="modal-top">
      ${media}
      <div class="modal-info">
        <div class="mcat">${cat.name}</div>
        <h2>${p.name}</h2>
        <p class="msub">${p.subtitle}</p>
        <div class="cert-row">${certs}${p.brand?`<span class="cert-badge">${icon('award')}${p.brand}</span>`:''}</div>
        <div class="modal-actions">
          <button class="btn btn-add-lg" onclick="addToCart('${p.id}');updateModalBtn()">${icon('plus')} Add to Enquiry</button>
          <a class="btn btn-wa" href="https://wa.me/919901141444?text=${encodeURIComponent('Hi, I would like a quote for '+p.name+' ('+p.models.join(', ')+')')}" target="_blank">${icon('chat')} Quick Quote</a>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="mtabs">
        <button class="mtab active" onclick="switchTab(event,'tab-feat')">Features</button>
        <button class="mtab" onclick="switchTab(event,'tab-spec')">Specifications</button>
        <button class="mtab" onclick="switchTab(event,'tab-model')">Models (${p.models.length})</button>
      </div>
      <div class="mtab-panel active" id="tab-feat"><ul class="feat-list">${feats}</ul></div>
      <div class="mtab-panel" id="tab-spec"><table class="spec-table">${specs}</table></div>
      <div class="mtab-panel" id="tab-model"><p style="color:var(--slate);font-size:14px;margin-bottom:14px">Available models &amp; variants — specify your preference when you enquire:</p><div class="model-chips">${models}</div></div>
    </div>`;
  document.getElementById('prodOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  // Update page title and URL hash for direct product sharing and indexing
  document.title = `${p.name} — Medical Equipment | Inquis Life Care Sciences`;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', `${p.name} (${p.subtitle}). Models: ${p.models.join(', ')}. Certified: ${(p.certs||[]).join(', ')}. Inquis Life Care Sciences, Hyderabad.`);
  history.replaceState(null, '', '#product/' + p.id);
}
function closeModal(){
  document.getElementById('prodOverlay').classList.remove('open');
  document.body.style.overflow='';
  const activeNav = (document.querySelector('nav.main a.active')||{}).dataset?.nav || 'home';
  updateViewSEO(activeNav);
  history.replaceState(null, '', '#' + activeNav);
}
function switchTab(e,id){
  e.currentTarget.parentElement.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
  e.currentTarget.classList.add('active');
  document.querySelectorAll('.mtab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function updateModalBtn(){} // hook for future

/* ============ CART / ENQUIRY ============ */
function addToCart(id){
  const existing=cart.find(c=>c.id===id);
  const p=DATA.products.find(x=>x.id===id);
  if(existing){existing.qty++;}
  else{cart.push({id,qty:1,model:p.models[0]});}
  saveCart();updateCartUI();
  toast(icon('check')+' '+p.name+' added to enquiry');
  pulseCart();
}
function removeFromCart(id){cart=cart.filter(c=>c.id!==id);saveCart();updateCartUI();renderDrawer();}
function changeQty(id,d){const c=cart.find(x=>x.id===id);if(!c)return;c.qty=Math.max(1,c.qty+d);saveCart();updateCartUI();renderDrawer();}
function setModel(id,m){const c=cart.find(x=>x.id===id);if(c){c.model=m;saveCart();}}
function cartCount(){return cart.reduce((s,c)=>s+c.qty,0);}
function updateCartUI(){
  const n=cartCount();const b=document.getElementById('cartBadge');
  b.textContent=n;b.classList.toggle('show',n>0);
}
function pulseCart(){const b=document.getElementById('cartBadge');b.style.transform='scale(0)';setTimeout(()=>b.classList.add('show'),10);}

function openDrawer(){renderDrawer();document.getElementById('drawer').classList.add('open');document.getElementById('drawerOverlay').classList.add('open');document.body.style.overflow='hidden';}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawerOverlay').classList.remove('open');document.body.style.overflow='';}
function renderDrawer(){
  const body=document.getElementById('drawerBody');const foot=document.getElementById('drawerFoot');
  if(cart.length===0){
    body.innerHTML=`<div class="drawer-empty"><div class="big">${icon('cart')}</div>
      <h3 style="font-size:17px;margin-bottom:6px">Your enquiry is empty</h3>
      <p style="font-size:14px">Add products from the catalog to request a quote.</p>
      <button class="btn btn-primary" style="margin-top:20px;background:var(--royal);color:#fff" onclick="closeDrawer();go('catalog')">Browse Catalog</button></div>`;
    foot.innerHTML='';return;
  }
  body.innerHTML=cart.map(c=>{
    const p=DATA.products.find(x=>x.id===c.id);if(!p)return'';
    const cat=catMeta(p.cat);
    let thumb;
    if(p.image){thumb=`<div class="enq-thumb"><img src="img/${p.image}" alt=""></div>`;}
    else{const col=CATCOLOR[p.cat]||['#0b4699','#2f7fd1'];thumb=`<div class="enq-thumb icon" style="background:linear-gradient(150deg,${col[0]},${col[1]})">${icon(cat.icon)}</div>`;}
    const opts=p.models.map(m=>`<option ${m===c.model?'selected':''}>${m}</option>`).join('');
    return `<div class="enq-item">
      ${thumb}
      <div class="enq-info">
        <div class="ecat">${cat.name}</div>
        <h4>${p.name}</h4>
        <select class="enq-model-sel" onchange="setModel('${c.id}',this.value)">${opts}</select>
        <div class="enq-qty"><button onclick="changeQty('${c.id}',-1)">${icon('minus')}</button><span>${c.qty}</span><button onclick="changeQty('${c.id}',1)">${icon('plus')}</button></div>
      </div>
      <button class="enq-remove" onclick="removeFromCart('${c.id}')">${icon('x')}</button>
    </div>`;
  }).join('');
  foot.innerHTML=`
    <form class="enq-form" onsubmit="submitEnquiry(event)">
      <div class="row2"><input id="enqName" required placeholder="Your name *"><input id="enqOrg" placeholder="Hospital / Org"></div>
      <div class="row2"><input id="enqPhone" required type="tel" placeholder="Phone *"><input id="enqEmail" type="email" placeholder="Email"></div>
      <textarea id="enqMsg" rows="2" placeholder="Notes (optional)"></textarea>
      <button type="submit" class="enq-submit">${icon('send')} Submit Enquiry (${cartCount()} item${cartCount()>1?'s':''})</button>
    </form>
    <button class="enq-wa" onclick="sendWhatsApp()">${icon('chat')} Send via WhatsApp</button>`;
}
function buildEnquiryText(){
  let t='*Enquiry — Inquis Life Care Sciences*%0A%0A';
  cart.forEach((c,i)=>{const p=DATA.products.find(x=>x.id===c.id);
    t+=`${i+1}. ${p.name} — ${c.model} (Qty: ${c.qty})%0A`;});
  const name=(document.getElementById('enqName')||{}).value||'';
  const org=(document.getElementById('enqOrg')||{}).value||'';
  const phone=(document.getElementById('enqPhone')||{}).value||'';
  const email=(document.getElementById('enqEmail')||{}).value||'';
  const msg=(document.getElementById('enqMsg')||{}).value||'';
  t+='%0A';
  if(name)t+=`Name: ${name}%0A`;if(org)t+=`Org: ${org}%0A`;
  if(phone)t+=`Phone: ${phone}%0A`;if(email)t+=`Email: ${email}%0A`;
  if(msg)t+=`Notes: ${msg}%0A`;
  return t;
}
function sendWhatsApp(){
  if(cart.length===0){toast(icon('x')+' Add products first');return;}
  window.open('https://wa.me/919901141444?text='+buildEnquiryText(),'_blank');
}
function submitEnquiry(e){
  e.preventDefault();
  const name=document.getElementById('enqName').value;
  const phone=document.getElementById('enqPhone').value;
  const email=document.getElementById('enqEmail').value||'';
  const org=document.getElementById('enqOrg').value||'';
  const msg=document.getElementById('enqMsg').value||'';
  let body='Enquiry from Inquis Life Care Sciences website%0D%0A%0D%0A';
  cart.forEach((c,i)=>{const p=DATA.products.find(x=>x.id===c.id);
    body+=`${i+1}. ${p.name} - ${c.model} (Qty: ${c.qty})%0D%0A`;});
  body+=`%0D%0AName: ${name}%0D%0AOrganization: ${org}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0ANotes: ${msg}`;
  const subject='Product Enquiry — '+cartCount()+' item(s)';
  window.location.href=`mailto:sales@inquislifecaresciences.com?cc=support@inquislifecaresciences.com,meghananarayanswamy@inquislifecaresciences.com&subject=${encodeURIComponent(subject)}&body=${body}`;
  toast(icon('check')+' Opening your email to send the enquiry…');
}
function submitContact(e){
  e.preventDefault();
  const form=e.target;
  const inputs=form.querySelectorAll('input, textarea');
  const name=inputs[0]?.value||'';
  const org=inputs[1]?.value||'';
  const phone=inputs[2]?.value||'';
  const email=inputs[3]?.value||'';
  const msg=inputs[4]?.value||'';
  const subject=`Enquiry / Message from ${name || 'Website Visitor'}`;
  const body=`Message from Inquis Life Care Sciences Website Contact Form%0D%0A%0D%0AName: ${name}%0D%0AOrganization: ${org}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${msg}`;
  window.location.href=`mailto:sales@inquislifecaresciences.com?cc=support@inquislifecaresciences.com,meghananarayanswamy@inquislifecaresciences.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast(icon('check')+' Opening your email to send the message…');
  form.reset();
}

/* ============ MOBILE NAV ============ */
function openMobNav(){document.getElementById('mobNav').classList.add('open');document.body.style.overflow='hidden';}
function closeMobNav(){document.getElementById('mobNav').classList.remove('open');document.body.style.overflow='';}

/* ============ TOAST ============ */
function toast(html){
  const w=document.getElementById('toastWrap');
  const t=document.createElement('div');t.className='toast';t.innerHTML=html;
  w.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),320);},2600);
}

/* ============ REVEAL ON SCROLL ============ */
let io;
function observeReveals(){
  if(!io){io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});}
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
}

/* ============ INIT ============ */
document.getElementById('yr').textContent=new Date().getFullYear();
buildHome();
buildFilters();
updateCartUI();
observeReveals();
window.addEventListener('scroll',()=>{document.getElementById('hdr').classList.toggle('scrolled',window.scrollY>10);},{passive:true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeDrawer();closeMobNav();}});
// route from hash
const rawHash = location.hash.replace('#', '');
if (rawHash.startsWith('product/')) {
  const pid = rawHash.replace('product/', '');
  go('catalog');
  setTimeout(() => openModal(pid), 120);
} else if (rawHash.startsWith('catalog/')) {
  const cat = rawHash.replace('catalog/', '');
  go('catalog');
  setTimeout(() => setCat(cat), 120);
} else if (['catalog', 'about', 'contact'].includes(rawHash)) {
  go(rawHash);
} else {
  updateViewSEO('home');
}
