type EvaluationConfig = {
    entityId: string;
    context: Record<string, string>;
    requestId?: string;
}

export default EvaluationConfig;