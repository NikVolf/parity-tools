#### utilities

```
pub fn camel_to_upper_case(s : &str) -> String {
    use std::ascii::*;
    let mut result_chars : Vec<char> = Vec::new();
    for c in s.chars() {
        assert!(c.is_alphanumeric(), format!("not alphanumeric '{}'", c));
        if c.is_uppercase() {
            result_chars.push('_');
        }
        result_chars.push((c as u8).to_ascii_uppercase() as char);
    }
    return result_chars.into_iter().collect();
}

fn snake_to_upper_case(s : &str) -> String {
    use std::ascii::*;
    let mut result_chars : Vec<char> = Vec::new();
    for c in s.chars() {
        if c == '_' {
            result_chars.push('_');
        } else {
            assert!(c.is_alphanumeric(), format!("not alphanumeric '{}'", c));
            result_chars.push((c as u8).to_ascii_uppercase() as char);
        }
    }
    return result_chars.into_iter().collect();
}

fn camel_to_snake_case(s : &str) -> String {
    use std::ascii::*;
    let mut result_chars : Vec<char> = Vec::new();
    let mut first_char = true;
    for c in s.chars() {
        assert!(c.is_alphanumeric(),
                format!("not alphanumeric '{}', i.e. {}", c, c as usize));
        if c.is_uppercase() && !first_char {
            result_chars.push('_');
        }
        result_chars.push((c as u8).to_ascii_lowercase() as char);
        first_char = false;
    }
    return result_chars.into_iter().collect();
}

fn capitalize_first_letter(s : &str) -> String {
    use std::ascii::*;
    let mut result_chars : Vec<char> = Vec::new();
    for c in s.chars() { result_chars.push(c) }
    result_chars[0] = (result_chars[0] as u8).to_ascii_uppercase() as char;
    return result_chars.into_iter().collect();
}
```
