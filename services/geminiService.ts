import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResponse } from "../types";

// Adiciona declaração explicita para process.env para evitar erros de TS em build time
declare var process: {
  env: {
    API_KEY?: string;
    [key: string]: string | undefined;
  }
};

// Helper para acessar a chave de API de forma segura em diferentes ambientes de build
const getApiKey = (): string => {
  try {
    // Verifica se process existe e tem env
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignora erro de referência
  }
  return '';
};

const apiKey = getApiKey();

// Initialize the client conditionally
const getAiClient = () => {
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const analyzeUserChallenge = async (challenge: string): Promise<AIAnalysisResponse> => {
  const ai = getAiClient();
  
  if (!ai) {
    // Em produção, isso não deve acontecer se a variável de ambiente estiver setada na Vercel
    console.warn("API Key não encontrada. Verifique as configurações de ambiente.");
    throw new Error("Sistema de análise temporariamente indisponível.");
  }

  const systemPrompt = `
    Você é Graciane Paulini, Mentora de Inteligência Emocional e Finanças Comportamentais para mulheres de alto nível.
    
    Seu objetivo NÃO é dar dicas genéricas de investimento, mas sim identificar o **BLOQUEIO EMOCIONAL** que está travando a prosperidade (financeira ou de vida) da usuária.
    
    A usuária vai descrever o momento atual dela. Com base nisso, gere um diagnóstico curto e impactante:
    
    1. **archetype** (O Padrão Oculto): Dê um nome criativo para o padrão de comportamento dela. 
       Exemplos: "A Salvadora Exausta", "A Perfeccionista da Escassez", "A Rainha do Autossabotagem", "A Executiva sem Tempo".
    
    2. **insight** (A Raiz no Inconsciente): Explique por que ela age assim. Conecte o comportamento financeiro/profissional com uma falta emocional ou crença limitante. Seja profunda.
    
    3. **recommendation** (A Chave de Virada): Uma ação prática ou mentalidade para quebrar esse padrão e unir a mente ao bolso.
    
    Tom de voz: Elegante, acolhedor, mas firme e revelador. Use termos como "crença", "merecimento", "fluxo", "prosperidade".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `O relato da cliente é: "${challenge}"`,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            archetype: { type: Type.STRING, description: "Nome do padrão comportamental identificado." },
            insight: { type: Type.STRING, description: "Análise profunda da causa emocional." },
            recommendation: { type: Type.STRING, description: "Conselho estratégico para desbloqueio." },
          },
          required: ["archetype", "insight", "recommendation"],
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("Sem resposta da IA");
    
    return JSON.parse(jsonText) as AIAnalysisResponse;

  } catch (error) {
    console.error("Erro na análise comportamental:", error);
    throw new Error("Não foi possível processar sua análise no momento. Tente novamente.");
  }
};