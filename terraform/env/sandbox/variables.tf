variable "region" {
  description = "リージョン"
  type        = string
}

variable "default_tags" {
  description = "リソースへ共通で設定するタグ"
  type        = map(string)
}

variable "env" {
  description = "Prod/Stgなどの環境"
  type        = string
  default     = "sandbox"

  validation {
    condition     = contains(["sandbox"], var.env)
    error_message = "Only \"sandbox\" is allowed in this variable."
  }
}
