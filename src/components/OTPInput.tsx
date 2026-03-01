import React, { useRef, useState, useEffect } from 'react';

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, value, onChange }) => {
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    const newOTP: string[] = value.split('').concat(Array(length).fill(' ')).slice(0, length);

    newOTP[index] = val.substring(val.length - 1);

    if (!val) {
        newOTP[index] = ' ';
    }

    const nextValue = newOTP.join('').replace(/ /g, '');
    onChange(nextValue);

    if (val && index < length - 1) {
      setActiveOTPIndex(index + 1);
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      e.preventDefault();

      const newOTP: string[] = value.split('').concat(Array(length).fill(' ')).slice(0, length);
      newOTP[index] = ' ';
      onChange(newOTP.join('').replace(/ /g, ''));
      setActiveOTPIndex(index > 0 ? index - 1 : 0);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className="flex justify-center items-center gap-3">
      {Array(length).fill('').map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              type="text"
              className="w-10 h-12 md:w-12 md:h-14 border border-gray-300 rounded-lg text-center font-semibold text-lg text-gray-900 focus:border-[#5A32A3] focus:ring-1 focus:ring-[#5A32A3] outline-none transition-all selection:bg-transparent"
              value={value[index] || ''}
              onChange={(e) => handleOnChange(e, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              onFocus={() => setActiveOTPIndex(index)}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OTPInput;
