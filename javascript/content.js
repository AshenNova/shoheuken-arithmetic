export const displayContent = (level) => {
  let html = "undefined";
  if (level == "calFour") {
    return (html = `
      </p>
      1. Common Multiples</p>
      2. Listing Factors</p>
      3. Common Factors</p>
      4. Double Digit Multiplication</p>
      5. Left Side Right Side + - x /</p>
      6. Fractions: Addition: Mixed Fractions</p>
      7. Fractions: Subtraction: Mixed Fractions</p>
      8. Decimals: Addition</p>
      9. Decimals: Subtraction</p>
      10. Decimals: Overlapping Place Value</p>
      11. Decimals: Multiplication (Single)</p>
      12. Decimals: Multiplication (Double)</p>
      13. Decimals: Division </p>
      14. Fractions to Decimal (Limit)</p>
      15. Decimals: Division and Multiplication with splitting</p>
      16. Multiplication in Sets</p>
      17. Fractions: Unit with a Value
      <hr></hr>
      99. All
      `);
  }
  if (level == "calFive")
    return (html = `
      </p>
      0. Order of Operation</p>
      <hr></hr>
      1. Fractions: Multiplication of Fractions</p>
      2. Fractions: Mixed Fraction Multiplication</p>
      3. Fractions: Conversion</p>
      4. Fractions: Remainder Concept</p>
      5. Fractions: Identical Numerator</p>
      6. Fractions: Unlike Fraction with Permission</p>
      7. Fractions: Identical Numerator (Type 2)</p>
      8. Fractions: Before and after like fractions</p>
      <hr></hr>
      9. Geometry: Area of Triangle</p>
      10. Geometry: Area of Figure: Using 2 different Units</p>
      <hr></hr>
      11. Volume: Dimensions and Surface Area</p>
      12. Volume: Numerator with a Value</p>
      <hr></hr>
      13. Ratio: Repeated Identity</p>
      14. Ratio: Repeated Group</p>
      15. Ratio: Identical Total</p>
      16. Ratio: Unchanged Object</p>
      17. Ratio: Unchanged Total</p>
      18. Ratio: Unchanged Difference</p>
      19. Ratio: Manipulation in units</p>
      <hr></hr>
      20. Rates: Part thereof part thereafter</p>
      21. Rates: Taps
      <hr></hr>
      22. Percentage: Percentage of</p>
      23. Percentage: Perchange change</p>
      24. Percentage: Repeated Identity</p>
      25. Percentage: Repeated Group</p>
      26. Percentage: Remainder Concept</p>
      27. Percentage: Simple and Further discount</p>
      28. Percentage: GST, discount and Service Charge</p>
      <hr></hr>
      29. Average: Internal change</p>
      30. Average: External Change</p>
      31. Average: Odd consecutive days</p>
      <hr></hr>

      </p>99. All
      
      `);
};
