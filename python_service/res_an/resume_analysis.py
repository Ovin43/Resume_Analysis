from transformers import  AutoTokenizer
import sys
import torch
import json
from model import ModelLoader
from decode import decode_to_json
from reading import filered

#giving pdf path
pdf_path = sys.argv[1]


#giving the promt
def propt(text_file):
  prompt =f"""
  You are an AI trained to evaluate resumes. Analyze the following resume and provide structured feedback.
  The response should be in JSON format with fields: "Strengths", "Weaknesses", "Suggestions", and "Job_Matches".

  Resume Text:

  ${text_file}

  Return the structured JSON output.
  """;

  return prompt

#tokenizer input
def input(tokenizer,prompt):
  inputs = tokenizer(prompt, return_tensors="pt")
  return inputs

# call the functions
text_file = filered(pdf_path)
prompt = propt(text_file)

#load the model
model_id="microsoft/phi-2"
tokenizer = AutoTokenizer.from_pretrained(model_id)


innn=input(tokenizer,prompt)
model= ModelLoader.get_model()

# Generate response
with torch.no_grad():
    outputs = model.generate(**innn, max_length=900, do_sample=True, temperature=0.7)

# Decode output
feedback = tokenizer.decode(outputs[0], skip_special_tokens=True)

result=decode_to_json(feedback)
print(json.dumps(result))
sys.exit(0)
