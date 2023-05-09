<template>
    <div class="editor">
      <textarea></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: "textEditor",
    props: {
      value: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        content: this.value,
      };
    },
    methods: {
      toggleBold() {
        this.insertText("**加粗文本**");
      },
      toggleItalic() {
        this.insertText("_斜体文本_");
      },
      insertImage() {
        const url = prompt("请输入图片链接：");
        if (url) {
          this.insertText(`![图片描述](${url})`);
        }
      },
      insertText(text) {
        const start = this.$refs.textarea.selectionStart;
        const end = this.$refs.textarea.selectionEnd;
        const before = this.content.substring(0, start);
        const after = this.content.substring(end, this.content.length);
        this.content = before + text + after;
        this.$refs.textarea.selectionStart = start + text.length;
        this.$refs.textarea.selectionEnd = start + text.length;
        this.$refs.textarea.focus();
        this.$emit("input", this.content);
      },
      getContent() {
        return this.content;
      },
    },
  };
  </script>
  
  <style scoped>
  .editor {
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  
 textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 10px;
  }
  </style>
  