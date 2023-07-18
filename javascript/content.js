export const displayContent = (level) => {
  //   let html = undefined;

  if (level == "heuFourb") {
    return `
    </p>
    1. Lowest Common Multiples ( Indirect )</p>
    2. Highest Common Factor ( Indirect )</p>
    3. Unchanged Difference</p>
    4. Unchanged Total</p>
    5. Simultaneous Equation</p>
    6. Internal Transfer: Double Effect</p>
    <hr>
    9. All`;
  }

  if (level == "heuSix") {
    return `
    </p>
    1. Lowest Common Time</p>
    2. Cycle</p>
    3. Repeated Identity Type 3</p>
    4. Snake and Ladder</p>
    <hr>
    9. All
    `;
  }

  if (level == "heuSixb") {
    return `
    </p>
    1. Identical Quantity with difference (Type 3)</p>
    2. More Than / Less Than</p>
    3. Using it all</p>
    4. Identical Quantity with difference (Level 2) Type 1 Multiples</p>
    5. Identical Quantity with difference (Level 2) Type 1 Difference</p>
    6. Identical Quantity with difference (Level 2) Type 2</p>
    <hr>
    9. All
    `;
  }

  if (level == "calThree") {
    return `
    </p>
    1. Addition (to - 10 000) No carry</p>
    2. Subtraction (to - 10 000) No borrowing</p>
    3. Addition (to - 10 000) (Carrying)</p>
    4. Subtraction (to - 10 000) (Borrowing)</p>
    5. Single blank</p>
    6. Working (Other sequence)</p>
    7. Arithmetic Constant</p>
    8. Arithmetic Stagger</p>
    9. Working: Multiplication</p>
    10. Overlapping Place Value</p>
    11. Working: Long Division ( No remainder )</p>
    12. Working: Long Division ( Remainder )</p>
    13. Working: Multiplication ( Single Blank )</p>
    14. Multiplication in sets</p>
    15. Long Division: Simple Statement</p>
    16. Left Side Right Side + - x ÷</p>
    17. Multiplication and Division of Convenient Numbers</p>
    18. Parts and Intervals</p>
    19. Time: Timeline ( hours and mins )</p>
    20. Fractions: Addition and Subtraction</p>
    21. Fractions: Expansion and simplification</p>
    <hr></hr>
    99. All`;
  }
  if (level == "calFour") {
    return `
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
      `;
  }
  if (level == "calFive")
    return `
      </p>
      0. Order of Operation</br>
      <hr></hr>
      1. Fractions: Multiplication of Fractions</br>
      2. Fractions: Mixed Fraction Multiplication</br>
      3. Fractions: Conversion</br>
      4. Fractions: Remainder Concept</br>
      5. Fractions: Identical Numerator</br>
      6. Fractions: Unlike Fraction with Permission</br>
      7. Fractions: Identical Numerator (Type 2)</br>
      8. Fractions: Before and after like fractions</br>
      <hr></hr>
      9. Geometry: Area of Triangle</br>
      10. Geometry: Area of Figure: Using 2 different Units</br>
      <hr></hr>
      11. Volume: Dimensions and Surface Area</br>
      12. Volume: Numerator with a Value</br>
      <hr></hr>
      13. Ratio: Simplification and Expansion</br>
      14. Ratio: Repeated Identity</br>
      15. Ratio: Repeated Group</br>
      16. Ratio: Identical Total</br>
      17. Ratio: Unchanged Object</br>
      18. Ratio: Unchanged Total</br>
      19. Ratio: Unchanged Difference</br>
      20. Ratio: Manipulation in units</br>
      21. Ratio: Repeated Identity (Geometry)</br>
      22. Ratio: Wipe on wipe off</br>
      <hr></hr>
      23. Rates: Part thereof part thereafter</br>
      24. Rates: Taps</br>
      <hr></hr>
      25. Percentage: Percentage of</br>
      26. Percentage: Perchange change</br>
      27. Percentage: Repeated Identity</br>
      28. Percentage: Repeated Group</br>
      29. Percentage: Remainder Concept</br>
      30. Percentage: Simple and Further discount</br>
      31. Percentage: GST, discount and Service Charge</br>
      32. Percentage: Identical Effect</br>
      <hr></hr>
      33. Average: Internal change</br>
      34. Average: External Change</br>
      35. Average: Odd consecutive days</br>
      36. Average: Triangle Numbers</br>
      <hr></hr>
      </p>99. All
      
      `;

  if (level == "calSix") {
    return `
    </p>
    1. Fractions: Finding remainder</p>
    2. Circles: Area and Perimeter</p>
    3. Circles: Inner Square</br>
    4. Circles: Others</br>
    <hr>
    5. Speed: Average Speed</p>
    6. Speed: Moving Apart</p>
    7. Pie Chart</br>
    <hr>
    99. All
    `;
  }
  if (level == "calSixb") {
    return `
    </p>
    1. Speed: Meet up</p>
    2. Speed: Catch up</p>
    3. Speed: Double Triangle</p>
    4. Volume: Grouping</p>
    5. Volume: Meet Up</p>
    6. Geometry: Repeated Identity Area
    <hr>
    99. All`;
  }
};
