/*    title: "Copenhagen Burnout Inventory (CBI)",
    description: "Test de evaluación del síndrome de burnout que mide tres dimensiones: agotamiento personal, agotamiento laboral y agotamiento relacionado con clientes.",
    scales: [
        {
            id: "personal_burnout",
            name: "Agotamiento Personal",
            description: "Evalúa el nivel de fatiga física y psicológica personal"
        },
        {
            id: "work_burnout",
            name: "Agotamiento Laboral",
            description: "Evalúa el agotamiento relacionado con el trabajo"
        },
        {
            id: "client_burnout",
            name: "Agotamiento Relacionado con Clientes",
            description: "Evalúa el agotamiento en la relación con clientes/pacientes"
        }
    ],*/

import { ISeedCbi } from "../types/seed.types";

export const seedCbi: ISeedCbi = {
    questions: [
        // AGOTAMIENTO PERSONAL (Personal Burnout)
        {
            id: 1,
            scale: "personal_burnout",
            question: "¿Con qué frecuencia te sientes cansado/a?",
            questionEn: "How often do you feel tired?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 2,
            scale: "personal_burnout",
            question: "¿Con qué frecuencia estás físicamente agotado/a?",
            questionEn: "How often are you physically exhausted?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 3,
            scale: "personal_burnout",
            question: "¿Con qué frecuencia estás emocionalmente agotado/a?",
            questionEn: "How often are you emotionally exhausted?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 4,
            scale: "personal_burnout",
            question: "¿Con qué frecuencia piensas: 'Ya no puedo más'?",
            questionEn: "How often do you think: 'I can't take it anymore'?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 5,
            scale: "personal_burnout",
            question: "¿Con qué frecuencia te sientes desgastado/a?",
            questionEn: "How often do you feel worn out?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 6,
            scale: "personal_burnout",
            question: "¿Con qué frecuencia te sientes débil y susceptible a enfermedades?",
            questionEn: "How often do you feel weak and susceptible to illness?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },

        // AGOTAMIENTO LABORAL (Work-related Burnout)
        {
            id: 7,
            scale: "work_burnout",
            question: "¿Te sientes desgastado/a al final del día de trabajo?",
            questionEn: "Do you feel worn out at the end of the working day?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 8,
            scale: "work_burnout",
            question: "¿Te sientes agotado/a por la mañana al pensar en otro día de trabajo?",
            questionEn: "Are you exhausted in the morning at the thought of another day at work?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 9,
            scale: "work_burnout",
            question: "¿Sientes que cada hora de trabajo es cansada para ti?",
            questionEn: "Do you feel that every working hour is tiring for you?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 10,
            scale: "work_burnout",
            question: "¿Tienes suficiente energía para la familia y amigos durante el tiempo libre?",
            questionEn: "Do you have enough energy for family and friends during leisure time?",
            reverseScored: true, // Esta pregunta se puntúa de forma inversa
            options: [
                { value: 100, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 75, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 25, label: "A menudo", labelEn: "Often" },
                { value: 0, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 11,
            scale: "work_burnout",
            question: "¿Tu trabajo es emocionalmente agotador?",
            questionEn: "Is your work emotionally exhausting?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 12,
            scale: "work_burnout",
            question: "¿Tu trabajo te frustra?",
            questionEn: "Does your work frustrate you?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 13,
            scale: "work_burnout",
            question: "¿Te sientes quemado/a por tu trabajo?",
            questionEn: "Do you feel burnt out because of your work?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },

        // AGOTAMIENTO RELACIONADO CON CLIENTES (Client-related Burnout)
        {
            id: 14,
            scale: "client_burnout",
            question: "¿Te resulta difícil trabajar con clientes?",
            questionEn: "Do you find it hard to work with clients?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 15,
            scale: "client_burnout",
            question: "¿Trabajar con clientes drena tu energía?",
            questionEn: "Does it drain your energy to work with clients?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 16,
            scale: "client_burnout",
            question: "¿Te resulta frustrante trabajar con clientes?",
            questionEn: "Do you find it frustrating to work with clients?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 17,
            scale: "client_burnout",
            question: "¿Sientes que das más de lo que recibes cuando trabajas con clientes?",
            questionEn: "Do you feel that you give more than you get back when you work with clients?",
            options: [
                { value: 0, label: "Nunca/Casi nunca", labelEn: "Never/Almost never" },
                { value: 25, label: "Rara vez", labelEn: "Seldom" },
                { value: 50, label: "A veces", labelEn: "Sometimes" },
                { value: 75, label: "A menudo", labelEn: "Often" },
                { value: 100, label: "Siempre", labelEn: "Always" }
            ]
        },
        {
            id: 18,
            scale: "client_burnout",
            question: "¿Estás cansado/a de trabajar con clientes?",
            questionEn: "Are you tired of working with clients?",
            options: [
                { value: 0, label: "En muy bajo grado", labelEn: "To a very low degree" },
                { value: 25, label: "En bajo grado", labelEn: "To a low degree" },
                { value: 50, label: "En cierto grado", labelEn: "Somewhat" },
                { value: 75, label: "En alto grado", labelEn: "To a high degree" },
                { value: 100, label: "En muy alto grado", labelEn: "To a very high degree" }
            ]
        },
        {
            id: 19,
            scale: "client_burnout",
            question: "¿A veces te preguntas cuánto tiempo más podrás continuar trabajando con clientes?",
            questionEn: "Do you sometimes wonder how long you will be able to continue working with clients?",
            options: [
                { value: 0, label: "En muy bajo grado", labelEn: "To a very low degree" },
                { value: 25, label: "En bajo grado", labelEn: "To a low degree" },
                { value: 50, label: "En cierto grado", labelEn: "Somewhat" },
                { value: 75, label: "En alto grado", labelEn: "To a high degree" },
                { value: 100, label: "En muy alto grado", labelEn: "To a very high degree" }
            ]
        }

    ]
}