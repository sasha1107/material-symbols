#!/bin/bash

# 1. yarn gen:material 실행
if hygen gen material-icon; then
  echo "✅ Material icons generated successfully!"

  # 2. 성공하면 추가로 실행할 스크립트
  echo "🚀 Running barrel export"
  
  # barrel export 파일에 추가
  if hygen inject barrel; then
    # prettier 실행
    yarn prettier . --write
    echo "✅ Barrel export added successfully!"
  else
    echo "❌ Failed to add barrel export."
    exit 1
  fi

else
  echo "❌ Failed to generate Material icons."
  exit 1
fi