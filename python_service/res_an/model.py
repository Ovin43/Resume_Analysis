from transformers import AutoModelForCausalLM


class ModelLoader:
    _instance = None  # Class-level instance variable


    @staticmethod
    def get_model():
        if ModelLoader._instance is None:
            ModelLoader._instance = AutoModelForCausalLM.from_pretrained("microsoft/phi-2")
        return ModelLoader._instance