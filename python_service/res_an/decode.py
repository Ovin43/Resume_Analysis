import json
import re


def decode_to_json(feedback):
    match = re.search(r"\{.*\}", feedback, re.DOTALL)
    if match:
        json_text = match.group(0)  # Extract JSON substring
        parsed_data = json.loads(json_text)  # Convert to Python dictionary
    return parsed_data

